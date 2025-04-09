import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, model, Output, ViewChild } from '@angular/core';
import { GraphicCBComponent } from '../graphic-cb/graphic-cb.component';
import { GraphicRadioComponent } from "../graphic-radio/graphic-radio.component";

@Component({
  selector: 'checkbox-proxy',
  standalone: true,
  imports: [CommonModule, GraphicCBComponent, GraphicRadioComponent],
  templateUrl: './checkbox-overlay.component.html',
  styleUrl: './checkbox-overlay.component.css'
})
export class CheckboxOverlayComponent {
  @Input() id: string;
  @Input() name: string;
  @Input() ariaLabel: string = "Checkbox";
  @Input() disable = false;
  @Input() showDefault = true;

  @ViewChild("div") div;

  state = model<boolean>(false);
  test = false;

  processed(event, cb){

      this.state.update(newValue => event.target.checked);
    //cb.click();
    //cb.focus();
  }

  click(event){
    if (!this.disable){
      //console.log("state: " + this.state());
      this.state.update(newValue => !this.state());
    }

    event.preventDefault();
    event.stopPropagation();
    this.focus();
  }

  focus(){
    this.div.nativeElement.focus();
  }
  hasFocus(){
    return this.div?.nativeElement == document.activeElement;
  }
}
