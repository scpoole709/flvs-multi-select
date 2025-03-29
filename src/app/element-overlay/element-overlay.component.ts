import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'ms-element-overlay',
  standalone: true,
  imports: [],
  templateUrl: './element-overlay.component.html',
  styleUrl: './element-overlay.component.css'
})
export class ElementOverlayComponent {
  state = model<boolean>(false);
  test = false;
  change(event){
    this.state.update(newValue => event.target.checked);
  }
}
