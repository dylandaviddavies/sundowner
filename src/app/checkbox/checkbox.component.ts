import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input()
  checked: boolean;

  @Output()
  checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
}
