import { Component, computed, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class Button {
  type = input<'submit' | 'reset' | 'button'>('button');
  text = input<string>('Trial');
  disabled = input<boolean>(false);

  outlined = input<boolean>(false);
  rounded = input<boolean>(false);
  severity = input<'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'warn'>('primary');
  baseStyles = input<string>('border border-black shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5')

  buttonStyles = computed(() => {
    const styles = [this.baseStyles()];

    styles.push(this.rounded() ? 'rounded-full' : 'rounded-base');

    if (this.severity() === 'primary') {
      if (this.outlined()) {
        styles.push('border-blue-600 text-blue-600 bg-transparent hover:bg-blue-5');
      } else {
        styles.push('border-blue-600 bg-blue-600 text-white hover:bg-blue-700');
      }
    }
    else if (this.severity() === 'danger') {
      if (this.outlined()) {
        styles.push('border-red-600 text-red-600 bg-transparent hover:bg-red-5');
      } else {
        styles.push('border-red-600 bg-red-600 text-white hover:bg-red-700');
      }
    }

    return styles.join(' ').trim();
  })
}
