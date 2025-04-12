import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, ElementRef, Input, ViewChild, forwardRef } from '@angular/core';
import { GraphicRadioComponent } from "../graphic-radio/graphic-radio.component";

@Component({
  selector: 'radio-proxy',
  standalone: true,
  imports: [CommonModule, GraphicRadioComponent],
  templateUrl: './radio-overlay.component.html',
  styleUrl: './radio-overlay.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioOverlayComponent),
      multi: true
    }
  ]
})
export class RadioOverlayComponent {
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.checked = this.value === value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  updateValue(value: any): void {
    this.onChange(value);
    this.onTouched();
  }
  @Input() id: string;
  @Input() name: string;
  @Input() ariaLabel: string = "Radio";
  @Input() disable = false;
  @Input() showDefault = true;
  @Input() value;

  checked = false;

  @ViewChild("div") div;
  @ViewChild("cb") cb: ElementRef;

  processed(event, cb){
    this.onChange(event.target.value);
  }

  click(event){
    if (!this.disable){
      this.onChange(this.cb.nativeElement.value);
      this.checked = this.value === this.cb.nativeElement.value;
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
