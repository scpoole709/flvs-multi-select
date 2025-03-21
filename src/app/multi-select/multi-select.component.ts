import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
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
export class MultiSelectComponent implements OnInit, AfterViewInit{
  @ViewChild("parent") parent: ElementRef;
  @ViewChild("button") button: ElementRef;
  @Input() btnText = "not set";
  @Input() items = [];

  closedArrow = "➤";
  openedArrow = "⮟";
  opened = true;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.parent.nativeElement.onkeydown = (ev: KeyboardEvent) => {
      if (ev.key == "Tab"){
        if (this.opened){
          ev.preventDefault();
          ev.stopPropagation();

          this.setFocus(ev.shiftKey);
        }
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
    console.log(ev);
  }

  setFocus(shiftKey: boolean){
    if (document.activeElement == this.parent.nativeElement){
      // button has focus, focus first element
      this.itemsList[0].focus();
    }
    else {
      let current = -1;
      for (var i =  0; i < this.itemsList.length; i++){
        if (this.itemsList[i].hasFocus()){
          current = i;
          break;
        }
      }
      current += shiftKey ? -1 : 1;
      if (current < 0 || current >= this.itemsList.length){
        this.button.nativeElement.focus();
      }
      else {
        console.log("current: " + current);
        this.itemsList[current].focus();
      }
    }
  }
}
