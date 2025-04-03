import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AnimatedCheckBoxComponent } from '../animated-check-box/animated-check-box.component';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ms-drop-down-item',
  standalone: true,
  imports: [AnimatedCheckBoxComponent, CommonModule],
  templateUrl: './drop-down-item.component.html',
  styleUrl: './drop-down-item.component.css'
})
export class DropDownItemComponent {
  @ViewChild("spanny") spanny: ElementRef;
  @Input() item;
  @Input() properties;
  @Output() change = new EventEmitter<{state: boolean, item}>();

  focus(){
    this.spanny.nativeElement.focus();
  }
  hasFocus(){
    return this.spanny.nativeElement === document.activeElement;
  }
  isDisabled(){
    return this.item.disable;
  }
  onClick(state: boolean){
    this.focus();
    this.change.next({state, item: this.item});
  }
}
