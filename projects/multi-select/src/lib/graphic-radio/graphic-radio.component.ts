import { CommonModule } from '@angular/common';
import { Component, ViewChild, Input, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'graphic-radio',
  standalone: true,
  imports: [CommonModule],
  template: ` <div #radio class="radio">
                <span class="span-plain" [ngClass]="checked ? 'span-checked': ''"></span>
              </div>`,
  styleUrl: './graphic-radio.component.css'
})
export class GraphicRadioComponent  {
  @ViewChild('row') row: ElementRef;
  @Input() checked = false;
  @Input() disabled = false;
  @Input() properties;
}
