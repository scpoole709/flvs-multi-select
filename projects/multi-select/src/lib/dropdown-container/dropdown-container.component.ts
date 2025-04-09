import { NgFor } from '@angular/common';
import { Component, Input, ViewChildren, OnChanges, EventEmitter, Output } from '@angular/core';
import { DropDownItemComponent } from '../drop-down-item/drop-down-item.component';
import { ChildFocusMgrDirective } from '../directives/child-focus-mgr.directive';

@Component({
  selector: 'ms-dropdown-container',
  standalone: true,
  imports: [NgFor, DropDownItemComponent, ChildFocusMgrDirective],
  templateUrl: './dropdown-container.component.html',
  styleUrl: './dropdown-container.component.css'
})
export class DropdownContainerComponent implements OnChanges {
  @Input() items: DropdownItem [] = [];
  @Input() top = "40px";
  @Input() properties;
  @Output() focusLost = new EventEmitter<void>();

  @ViewChildren(DropDownItemComponent) allDropdowns;

  selectAllItem: DropdownItem = {text: "Select All", value: "all", checked: false, disable: false, arialabel: "Select All"};

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



