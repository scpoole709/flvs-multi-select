import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[properties]',
  standalone: true
})
export class PropertiesDirective {

  @Input() propName = "";

  static propertiesMap = new Map<string, Map<string, string>>();

  constructor(private el: ElementRef) {
    const props = PropertiesDirective.propertiesMap.get(this.propName);
    if (!!props){

    }


  }

}
