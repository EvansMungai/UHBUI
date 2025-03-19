import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  @Input() styles: string = '';
  @Input() showToast: boolean = false;
  @Input() alertStyle: string = '';
  @Input() alterMessage: string = '';

  get toastStyles(): string {
    const props = this.styles;
    const toastStyles = `toast ${props} transition-all transition-discrete delay-300 duration-700 ease-in-out`;
    return toastStyles;
  }
  get alertStyles(): string {
    const props = this.alertStyle;
    const alertStyles = `alert ${props}`;
    return alertStyles;
  }
}
