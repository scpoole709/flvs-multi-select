import { NgFor, NgIf } from '@angular/common';
import { Component, Input, ViewChildren, OnChanges, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { DropDownItemComponent } from '../drop-down-item/drop-down-item.component';
import { ChildFocusMgrDirective } from '../directives/child-focus-mgr.directive';

@Component({
  selector: 'ms-dropdown-container',
  standalone: true,
  imports: [NgFor, NgIf, DropDownItemComponent, ChildFocusMgrDirective],
  templateUrl: './dropdown-container.component.html',
  styleUrl: './dropdown-container.component.css'
})
export class DropdownContainerComponent implements OnChanges {
  @Input() items: DropdownItem [] = [];
  @Input() properties;
  @Input() showSelectAll = false;
  @Output() focusLost = new EventEmitter<void>();

  @ViewChild("container") container: ElementRef;
  @ViewChildren(DropDownItemComponent) allDropdowns;

  selectAllItem: DropdownItem = {text: "Select All", value: "all", checked: false, disable: false, arialabel: "Select All"};

  top = "0px";
  left = "0px";

  ngOnChanges(changes){
    setTimeout(() => {
      this.allDropdowns.toArray()[0].focus();
      this.checkAllSelected();
    }, 10);
  }

  focusChange(event){
    this.focusLost.next();
  }

  selectAll(ev){
    this.items.forEach(each => {
      if (!each.disable){
        each.checked = ev.state;
      }
    })
  }

  changes(ev){
    //ev.item.checked = ev.state;
    this.checkAllSelected();
  }

  position(parentRect: DOMRect){
    const ourRect = this.container.nativeElement.getBoundingClientRect();

    this.top = parentRect.height + "px";
    this.left = "0px";

    if (parentRect.y + parentRect.height + ourRect.height > window.innerHeight){
      this.top = (4 + ourRect.height) * -1 + "px";
    }

    if (parentRect.x + ourRect.width > window.innerWidth){
      this.left = parentRect.width - ourRect.width + "px";
    }
  }

  checkAllSelected(){
    let found = this.items.find( i => !i.checked);
    this.selectAllItem.checked = !found;
  }
}

export interface DropdownItem{
  text?: string;
  value?: string;
  arialabel: string;
  disable?: boolean;
  checked: boolean;
}



