import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  color: 'default' | 'primary' = 'default';

  @Input()
  style: 'fill' | 'outline' = 'fill';

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  loading = false;

  get className(): string {
    return `
      app-btn
      app-btn--${this.size}
      app-btn--${this.color}
      ${this.loading ? 'app-btn--loading' : ''}
      app-btn--${this.style}
    `;
  }
}
