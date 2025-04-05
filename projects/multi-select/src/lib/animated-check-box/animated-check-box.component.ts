import { Component, EventEmitter, ViewChild, Output, Input, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxOverlayComponent } from '../checkbox-overlay/checkbox-overlay.component';

@Component({
  selector: 'animated-cb',
  standalone: true,
  imports: [FormsModule, CheckboxOverlayComponent],
  templateUrl: './animated-check-box.component.html',
  styleUrl: './animated-check-box.component.css'
})
export class AnimatedCheckBoxComponent {

  @Input() checked = false;
  @Input() disabled = false;
  @Input() properties;
  @Output() change = new EventEmitter<boolean>();

  clickInput(ev){
    // if (!this.disabled){
    //   this.checked = !this.checked;
    //   this.change.next(this.checked);
    // }
    // ev.stopPropagation();
    // ev.preventDefault();
  }
}
