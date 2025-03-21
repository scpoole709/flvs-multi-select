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
  @Input() properties = new Properties();
  @Output() itemCollection = new EventEmitter<[]>();

  @ViewChildren(DropDownItemComponent) allDropdowns;

  ngOnChanges(changes){
    if (this.allDropdowns){
      this.itemCollection.next(this.allDropdowns.toArray());
    }
  }

  ngAfterViewInit(): void {
      if (this.allDropdowns){
        this.itemCollection.next(this.allDropdowns.toArray());
      }
  }
}

export interface DropdownItem{
  text?: string;
  value?: string;
}

export class Properties{
  text = "Select All";
}


