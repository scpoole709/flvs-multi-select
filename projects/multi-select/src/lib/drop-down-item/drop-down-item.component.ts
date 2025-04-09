import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AnimatedCheckBoxComponent } from '../animated-check-box/animated-check-box.component';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { CheckboxOverlayComponent } from '../checkbox-overlay/checkbox-overlay.component';

@Component({
  selector: 'ms-drop-down-item',
  standalone: true,
  imports: [CommonModule, CheckboxOverlayComponent],
  templateUrl: './drop-down-item.component.html',
  styleUrl: './drop-down-item.component.css'
})
export class DropDownItemComponent {
  @ViewChild("spanny") spanny: ElementRef;
  @ViewChild("cb") cb;
  @Input() item;
  @Input() properties;
  @Output() changes = new EventEmitter<{state: boolean, item}>();

  set checked( state: boolean){
    this.item.checked = state;
    this.changes.next({state, item: this.item});
  }
  get checked(){
    return this.item.checked;
  }

  focus(){
    this.cb.focus();
  }
  hasFocus(){
    return this.cb?.hasFocus();
  }
  get isDisabled(){
    return this.item.disable;
  }
}
