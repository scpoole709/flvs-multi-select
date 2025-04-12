import { CommonModule } from '@angular/common';
import { Component, ViewChild, Input, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'graphic-radio',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="outer"><div class="inner" [ngClass]="checked ? 'inner-checked': ''"></div></div>`,
  styleUrl: './graphic-radio.component.css'
})
export class GraphicRadioComponent  {
  @ViewChild('row') row: ElementRef;
  @Input() checked;
  @Input() disabled = false;
  @Input() properties;
}
