import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { DropdownContainerComponent } from "./dropdown-container/dropdown-container.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'multi-select',
  standalone: true,
  imports: [CommonModule, DropdownContainerComponent],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css'
})
export class MultiSelectComponent implements OnInit, OnDestroy {
  @ViewChild("button") button: ElementRef;
  @ViewChild("dropdown") dropdown: DropdownContainerComponent;
  @Input() btnText = "not set";
  @Input() items = [];
  @Input() properties;
  @Output() change = new EventEmitter<any>();

  closedArrow = "➤";
  openedArrow = "⮟";
  opened = false;

  ngOnInit(): void {
    document.onclick = (ev) => {
      if (ev.target !== this.button.nativeElement){
        this.opened = false;
      }
    }
  }

  ngOnDestroy(){
    document.onclick = null;
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
    if(this.opened){
      setTimeout( () => {
        this.dropdown.position(this.button.nativeElement.getBoundingClientRect());
      })
    }
  }
}
