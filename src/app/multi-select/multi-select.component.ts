import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { DropdownContainerComponent, DropdownItem } from "../dropdown-container/dropdown-container.component";
import { CommonModule } from '@angular/common';
import { DropDownItemComponent } from '../drop-down-item/drop-down-item.component';

@Component({
  selector: 'multi-select',
  standalone: true,
  imports: [CommonModule, DropdownContainerComponent],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css'
})
export class MultiSelectComponent implements OnInit, OnDestroy, AfterViewInit{
  @ViewChild("parent") parent: ElementRef;
  @ViewChild("button") button: ElementRef;
  @Input() btnText = "not set";
  @Input() items = [];
  @Input() properties;
  @Output() change = new EventEmitter<any>();

  closedArrow = "➤";
  openedArrow = "⮟";
  opened = false;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    document.onclick = null;
  }

  ngAfterViewInit(): void {
    this.parent.nativeElement.onkeydown = (ev: KeyboardEvent) => {
      let key = null;
      switch(ev.key){
        case "Tab":
          key = ev.shiftKey;
          break;
        case "ArrowDown":
          key = false;
          break;
        case "ArrowUp":
          key = true;
          break;
        default:
          break;
      }
      if (key != null && this.opened){
        if (this.opened){
          switch (this.setFocus(key)){
            case 0:
              this.toggle();
               ev.preventDefault();
              ev.stopPropagation();
              break;
            case 1:
              ev.preventDefault();
              ev.stopPropagation();
              break;
            case 2:
              break;
          }
        }
      }
    }
    document.onclick = (ev) => {
      if (ev.target !== this.button.nativeElement && this.findCurrent() < 0){
        this.opened = false;
      }
    }
  }

  get arrow(){
    return this.opened ? this.openedArrow : this.closedArrow;
  }

  toggle(open?: boolean){
    if (!!open){
      this.opened = open;
    } else {
      this.opened = !this.opened;
    }
    if (this.opened){
      setTimeout(() => {
        this.setFocus(false);
      })

    }
  }

  itemsList;
  itemCollection(ev){
    this.itemsList = ev;
  }

  setFocus(shiftKey: boolean): number {
    let state = 0;
    if (document.activeElement == this.parent.nativeElement){
      // button has focus, focus first element
      this.itemsList[0].focus();
      state = 1;
    }
    else {
      let current = this.findCurrent();
      current = shiftKey ? this.findPrev(current) : this.findNext(current);

      if (current < 0 || current >= this.itemsList.length){
        this.button.nativeElement.focus();
        state = 0;
      }
      else {
        this.itemsList[current].focus();
        state = 1;
      }
    }
    console.log("state: " + state);
    return state;
  }

  findCurrent(){
    if (!!this.itemsList){
      for (var i =  0; i < this.itemsList.length; i++){
        if (this.itemsList[i].hasFocus()){
          return i;
        }
      }
    }
    return -1;
  }

  findNext(current: number){
    for (var i =  current + 1; i < this.itemsList.length; i++){
      if (!this.itemsList[i].isDisabled()){
        return i;
      }
    }
    return this.itemsList.length;
  }
  findPrev(current: number){
    for (var i =  current - 1; i >= 0; i--){
      if (!this.itemsList[i]?.isDisabled()){
        return i;
      }
    }
    return -1;
  }
}
