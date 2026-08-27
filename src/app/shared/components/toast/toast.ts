import { Component, computed, inject, input, OnDestroy, OnInit, signal } from '@angular/core';
import { ToastService } from '../../../core/services/toast';
import { Subscription } from 'rxjs';
import { ToastMessageOptions } from '../../../core/interfaces/ToastMessageOptions';

@Component({
  imports: [],
  selector: 'app-toast',
  styleUrl: './toast.css',
  templateUrl: './toast.html',
})
export class Toast implements OnInit, OnDestroy {
  private toastService: ToastService = inject(ToastService);
  private messageSubscription: Subscription | undefined;
  private clearSubscription: Subscription | undefined;

  position = input<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top-right');
  toastStyles = input<string>();
  isVisible = signal<boolean>(false);

  messages = signal<ToastMessageOptions[]>([]);
  messagesArchieve: ToastMessageOptions[] | undefined;
  key = input<string | undefined>();
  preventOpenDuplicates = input<boolean>(false);
  preventDuplicates = input<boolean>(false);
  clearAllTrigger = signal<{} | null>(null);
  private activeTimers = new Map<any, any>();

  styles(message: ToastMessageOptions): string {
    const defaultStyles = `fixed flex flex-col border border-gray-200 z-50 p-4 mb-3 rounded-lg shadow-xl min-w-[300px]`;
    return `${defaultStyles} ${this.toastStyles()} ${this.toastPosition(message)} ${this.toastSeverity(message)}`.trim();
  }

  toastPosition(message: ToastMessageOptions): string {
    const positionMap: Record<string, string> = {
      'top-left': 'top-5 left-5',
      'top-right': 'top-5 right-5',
      'bottom-left': 'bottom-5 left-5',
      'bottom-right': 'bottom-5 right-5'
    };
    return positionMap[message.position ?? 'top-right']
  }

  toastSeverity(message: ToastMessageOptions): string {
    const severityMap: Record<string, string> = {
      success: 'border border-success bg-green-100 dark:text-white dark:border-green-400 dark:bg-green-800',
      error: 'border border-error bg-red-300 dark:border-red-400 dark:bg-error',
      warn: 'border border-amber-500 bg-amber-400 dark:border-yellow-600',
      info: 'border border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-accent'
    };

    return severityMap[message.severity ?? 'info'];
  }


  containsMessage(collection: ToastMessageOptions[], message: ToastMessageOptions): boolean {
    if (!collection) {
      return false;
    }

    return (
      collection.find((m) => {
        return m.summary === message.summary && m.detail == message.detail && m.severity === message.severity;
      }) != null
    );
  }

  canAdd(message: ToastMessageOptions): boolean {
    let allow = this.key() === message.key;

    if (allow && this.preventOpenDuplicates()) {
      allow = !this.containsMessage(this.messages(), message);
    }

    if (allow && this.preventDuplicates()) {
      allow = !this.containsMessage(this.messagesArchieve || [], message);
    }

    return allow;
  }

  add(messages: ToastMessageOptions[]): void {
    const processedMessages = messages.map(msg => ({
      ...msg,
      id: msg.id ?? crypto.randomUUID()
    }));

    this.isVisible.set(true);
    this.messages.update(current => [...current, ...processedMessages]);

    if (this.preventDuplicates()) {
      this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...processedMessages] : [...processedMessages];
    }
    processedMessages.forEach(message => {
      const timerId = setTimeout(() => {
        this.removeMessage(message.id);
      }, message.life);

      this.activeTimers.set(message.id, timerId);
    });
  }

  removeMessage(id: any): void {
    if (this.activeTimers.has(id)) {
      clearTimeout(this.activeTimers.get(id));
      this.activeTimers.delete(id);
    }

    this.messages.update(current => current.filter(m => m.id !== id));
    if (this.messages().length === 0) {
      this.isVisible.set(false);
    }
  }
  clearAll() {
    this.activeTimers.forEach(timerId => clearTimeout(timerId));
    this.activeTimers.clear();
    this.messages.set([]);

    this.isVisible.set(false);
  }

  ngOnInit(): void {
    this.messageSubscription = this.toastService.message$.subscribe((messages) => {
      if (messages) {
        if (Array.isArray(messages)) {
          const filteredMessages = messages.filter((m) => this.canAdd(m));
          this.add(filteredMessages);
        } else if (this.canAdd(messages)) {
          this.add([messages]);
        }
      }
    });

    this.clearSubscription = this.toastService.clear$.subscribe((key) => {
      if (key) {
        if (this.key() === key) {
          this.clearAll()
        }
      } else {
        this.clearAll();
      }
    })
  }
  ngOnDestroy(): void {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }

    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }

  }
}
