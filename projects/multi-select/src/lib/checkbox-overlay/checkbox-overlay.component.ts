import { CommonModule } from '@angular/common';
import { Component,  forwardRef, Input, model, ViewChild } from '@angular/core';
import { GraphicCBComponent } from '../graphic-cb/graphic-cb.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'checkbox-proxy',
  standalone: true,
  imports: [CommonModule, GraphicCBComponent],
  templateUrl: './checkbox-overlay.component.html',
  styleUrl: './checkbox-overlay.component.css',
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CheckboxOverlayComponent),
        multi: true
      }
    ]
})
export class CheckboxOverlayComponent {
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.state.update(newValue => value);
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
    this.state.update(newValue => value);
    this.onChange(value);
    this.onTouched();
  }

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
    this.onChange(event.target.checked);
  }

  click(event){
    if (!this.disable){
      this.state.update(newValue => !this.state());
      this.onChange(this.state());
    }

    event.preventDefault();
    event.stopPropagation();
    this.focus();
  }

  focus(){
    this.div.nativeElement.focus();
    this.onTouched();
  }
  get hasFocus(){
    return this.div?.nativeElement == document.activeElement;
  }
}
