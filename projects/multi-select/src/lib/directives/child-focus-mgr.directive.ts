import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[childFocusMgr]',
  standalone: true
})
export class ChildFocusMgrDirective {

  @Input() selector = 'div';
  @Output() childFocusMgr = new EventEmitter<void>();

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  keyDown(event: KeyboardEvent){
    switch(event.key){
      case "Tab":
        this.testFocus(event.shiftKey);
        break;
      case "ArrowDown":
        this.testFocus(false);
        break;
      case "ArrowUp":
        this.testFocus(true);
        break;
    }
  }

  @HostListener('focusout', ['$event'])
  focusOut(event: FocusEvent){
    setTimeout( () => {
      let list =  Array.from(this.el.nativeElement.querySelectorAll('.overlay'));
      if (list.indexOf(document.activeElement) < 0){
        this.childFocusMgr.next();
      }
    }, 10);
  }

  testFocus(up: boolean){
    let list =  Array.from(this.el.nativeElement.querySelectorAll('.overlay'));
    let i =  list.indexOf(document.activeElement);
    i += up ? -1 : 1;
    if (list.length > 0 && i >= 0 && i < list.length){
          setTimeout( () => {
        (<HTMLElement>list[i]).focus();
      }, 10);
    }
    else {
      this.childFocusMgr.next();
    }
  }
}
