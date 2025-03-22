import { Component, EventEmitter, ViewChild, Output, Input, AfterViewInit, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'animated-cb',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './animated-check-box.component.html',
  styleUrl: './animated-check-box.component.css'
})
export class AnimatedCheckBoxComponent implements AfterViewInit {

  @ViewChild("cbInput") cbInput;
  @ViewChild("me") me: ElementRef;
  @Input() item;
  @Input() properties;
  @Output() change = new EventEmitter<boolean>();

  ngAfterViewInit(){
    // let list = this.me.nativeElement.querySelectorAll("input");
    // list[0].style.borderColor = "red";
    // const myElement = document.querySelector('span')
    // const myPseudoElement = window.getComputedStyle(myElement, ':after')
    // let el = this.me.nativeElement.querySelector("span::after");
    // alert(el);
  }

  clickInput(ev){
    if (!this.item.disable){
      this.item.checked = !this.item.checked;
      this.change.next(this.item.checked);
    }
    ev.stopPropagation();
    ev.preventDefault();
  }

  nono(ev:FocusEvent){
    console.log(ev.relatedTarget);
  }
}
