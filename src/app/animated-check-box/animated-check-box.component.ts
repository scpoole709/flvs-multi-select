import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'animated-cb',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './animated-check-box.component.html',
  styleUrl: './animated-check-box.component.css'
})
export class AnimatedCheckBoxComponent {

  @ViewChild("cbInput") cbInput;
  isChecked = true;

  clickInput(ev){
    this.isChecked = !this.isChecked;
    ev.stopPropagation();
    ev.preventDefault();

  }
}
