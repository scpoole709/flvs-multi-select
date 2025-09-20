import { Component, OnInit, Input, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'liarrow',
  standalone: true,
  template: `<li class="arrow-li">
              <div #arrowi (click)="arrowClicked($event)" style="flex-basis: 1em; border: solid 1px blue;font-family: monospace;"></div>
              <ng-content></ng-content>
            </li>`,

  styles: [".arrow-li { display: flex; font-size:12pt; font-family: monospace;}"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LiarrowComponent),
      multi: true
    }
  ]
})

export class LiarrowComponent implements OnInit {

  onChange: any = () => {}
  onTouch: any = () => {}

  writeValue(value: any){
    this.open = value
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(fn: any){
    this.onTouch = fn
  }
  @ViewChild('arrowi', {static: true}) arrow:ElementRef;

  open:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // 0 == none 1 == closed 2 == open
  @Input() set arrowStyle(value:number)
  {
    let el = <HTMLSpanElement>this.arrow.nativeElement;

    switch (value)
    {
      case -1:
        el.hidden = true;
        break;
      case 0:
        el.innerText = "";
        el.hidden = false;
        el.style.cursor = "default";
        break;
      case 1:
        el.innerText = "\u2B9E";
        el.hidden = false;
        el.style.cursor = "pointer";
        break;
      case 2:
        el.innerText = "\u2B9F";
        el.hidden = false;
        el.style.cursor = "pointer";
        break;
    }
  }

  arrowClicked(event:MouseEvent)
  {
    event.stopPropagation();
    if (!event.ctrlKey)
    {
      this.open = !this.open;
      this.onChange(this.open);
    }
  }
}
