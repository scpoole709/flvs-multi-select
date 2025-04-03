import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, model, Output } from '@angular/core';
import { GraphicCBComponent } from '../graphic-cb/graphic-cb.component';

@Component({
  selector: 'checkbox-proxy',
  standalone: true,
  imports: [CommonModule, GraphicCBComponent],
  templateUrl: './checkbox-overlay.component.html',
  styleUrl: './checkbox-overlay.component.css'
})
export class CheckboxOverlayComponent {
  @Input() id: string;
  @Input() name: string;
  @Input() ariaLabel: string = "Checkbox";
  @Input() showDefault = true;

  state = model<boolean>(false);
  test = false;
  change(event){
    this.state.update(newValue => event.target.checked);
  }

  processed(event, cb){
    cb.click();
    cb.focus();
  }
}
