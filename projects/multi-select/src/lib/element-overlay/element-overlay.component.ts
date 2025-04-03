import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'ms-element-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './element-overlay.component.html',
  styleUrl: './element-overlay.component.css'
})
export class ElementOverlayComponent {
  @Input() type:"checkbox" | "radio" = "checkbox";
  @Input() name: string;
  @Input() ariaLabel: string = "blah blah";

  state = model<boolean>(false);
  test = false;
  change(event){
    this.state.update(newValue => event.target.checked);
    console.log("type: " + this.type);
    console.log("aria: " + this.ariaLabel);
  }

  processed(event, cb){
    cb.click();
    cb.focus();
  }
}
