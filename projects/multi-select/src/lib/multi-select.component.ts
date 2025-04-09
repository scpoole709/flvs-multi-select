import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { DropdownContainerComponent, DropdownItem } from "./dropdown-container/dropdown-container.component";
import { CommonModule } from '@angular/common';
import { DropDownItemComponent } from './drop-down-item/drop-down-item.component';

@Component({
  selector: 'multi-select',
  standalone: true,
  imports: [CommonModule, DropdownContainerComponent],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css'
})
export class MultiSelectComponent implements OnInit {
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

  get arrow(){
    return this.opened ? this.openedArrow : this.closedArrow;
  }

  focusLost(){
    if (document.activeElement != this.button.nativeElement){
      this.opened = false;
    }
  }

  toggle(){
    this.opened = !this.opened;
  }
}
