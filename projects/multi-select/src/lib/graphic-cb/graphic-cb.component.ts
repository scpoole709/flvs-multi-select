import { CommonModule } from '@angular/common';
import { Component, ViewChild, Input, ElementRef, SimpleChanges } from '@angular/core';
import { PropertiesService } from '../properties/properties.service';

@Component({
  selector: 'graphic-cb',
  standalone: true,
  imports: [CommonModule],
  template: ` <div #row class="row" [style.fontSize]="'inherit'">
                <span class="span-plain" [ngClass]="checked ? 'span-checked': ''"></span>
              </div>`,
  styleUrl: './graphic-cb.component.css',
  providers: [ PropertiesService]
})
export class GraphicCBComponent  {
  @ViewChild('row') row: ElementRef;
  @Input() checked = false;
  @Input() disabled = false;

  constructor( private propSvc: PropertiesService)
  {
    
  }
}

