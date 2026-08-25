import { Component, inject, signal } from '@angular/core';
import { Toast } from './shared/components/toast/toast';
import { ToastService } from './core/services/toast';

@Component({
  imports: [Toast],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('uhb');
  private toastService = inject(ToastService);

  showSuccessToast(){
    this.toastService.add({
      key: 'main-toast',
      severity: 'success',
      summary: 'Success Alert!',
      detail: 'Your custom configuration has saved cleanly',
      life: 2000
    })
  }
}
