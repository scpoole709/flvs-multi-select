import { PropertiesDirective } from './../properties/properties.directive';
import { CommonModule } from '@angular/common';
import { Component, ViewChild, Input, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'graphic-cb',
  standalone: true,
  imports: [CommonModule, PropertiesDirective],
  template: ` <div #row class="row" [style.fontSize]="'inherit'" properties="graphic-cb">
                <span class="span-plain" [ngClass]="checked ? 'span-checked': ''" properties="graphic-cb-check"></span>
              </div>`,
  styleUrl: './graphic-cb.component.css',
  providers: [ PropertiesDirective]
})
export class GraphicCBComponent  {
  @ViewChild('row') row: ElementRef;
  @Input() checked = false;
  @Input() disabled = false;

  constructor()
  {

  }
}

