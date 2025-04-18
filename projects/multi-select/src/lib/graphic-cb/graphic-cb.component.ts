import { CommonModule } from '@angular/common';
import { Component, ViewChild, Input, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'graphic-cb',
  standalone: true,
  imports: [CommonModule],
  template: ` <div #row class="row">
                <span class="span-plain" [ngClass]="checked ? 'span-checked': ''"></span>
              </div>`,
  styleUrl: './graphic-cb.component.css'
})
export class GraphicCBComponent  {
  @ViewChild('row') row: ElementRef;
  @Input() checked = false;
  @Input() disabled = false;
  @Input() properties;
}

