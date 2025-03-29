import { CommonModule } from '@angular/common';
import { Component, EventEmitter, ViewChild, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'graphic-cb',
  standalone: true,
  imports: [CommonModule],
  template: ` <div id="main-row" class="row">
                <span class="span-plain" [ngClass]="checked ? 'span-checked': ''"></span>
              </div>`,
  styleUrl: './graphic-cb.component.css'
})
export class GraphicCBComponent implements OnInit {

  @Input() checked = false;
  @Input() disabled = false;
  @Input() properties;

  ngOnInit(): void {
      document.getElementById("main-row").style.setProperty("--cb-font-size", "20px");
  }
}

