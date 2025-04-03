import { CommonModule } from '@angular/common';
import { Component, OnChanges, ViewChild, Input, OnInit, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'graphic-cb',
  standalone: true,
  imports: [CommonModule],
  template: ` <div #row class="row">
                <span class="span-plain" [ngClass]="checked ? 'span-checked': ''"></span>
              </div>`,
  styleUrl: './graphic-cb.component.css'
})
export class GraphicCBComponent implements OnChanges {
  @ViewChild('row') row: ElementRef;
  @Input() checked = false;
  @Input() disabled = false;
  @Input() properties;


  ngOnChanges(changes: SimpleChanges): void {
    // if (!!this.row)
    //   this.row.nativeElement.style.setProperty("--cb-font-size", "20px");
  }

}

