import { NgFor } from '@angular/common';
import { Component, Input, ViewChildren, OnChanges, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimatedCheckBoxComponent } from "../animated-check-box/animated-check-box.component";
import { DropDownItemComponent } from '../drop-down-item/drop-down-item.component';

@Component({
  selector: 'ms-dropdown-container',
  standalone: true,
  imports: [NgFor, DropDownItemComponent],
  templateUrl: './dropdown-container.component.html',
  styleUrl: './dropdown-container.component.css'
})
export class DropdownContainerComponent implements OnChanges, AfterViewInit{
  @Input() items: DropdownItem [] = [];
  @Input() properties;
  @Output() itemCollection = new EventEmitter<[]>();

  @ViewChildren(DropDownItemComponent) allDropdowns;

  selectAllItem: DropdownItem = {text: "Select All", value: "all", checked: false, disable: false, arialabel: "Select All"};

  ngOnChanges(changes){
    setTimeout(() => {
      this.itemCollection.next(this.allDropdowns.toArray());
      this.checkAllSelected();
    }, 10);
  }

  ngAfterViewInit(): void {
    // if (this.allDropdowns){
    //   this.itemCollection.next(this.allDropdowns.toArray());
    //   setTimeout(() => {this.checkAllSelected()});
    // }
  }

  selectAll(ev){
    this.items.forEach(each => {
      if (!each.disable){
        each.checked = ev.state;
      }
    })
  }

  handleClick(ev){
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



