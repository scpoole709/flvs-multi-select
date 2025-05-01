import { Directive, ElementRef, Input } from '@angular/core';
import { PropertiesService } from './properties.service';

@Directive({
  selector: '[properties]',
  standalone: true
})
export class PropertiesDirective {

  @Input() properties = "";

  constructor(private el: ElementRef, private propertyService: PropertiesService) {
    setTimeout(()=> {
      this.applyProperties();
    })
  }

  applyProperties(){
    const propMap = this.propertyService.getProperties(this.properties);
    const keys = propMap.keys();

    if (this.properties == "graphic-cb")
      console.log("");

    for (const key of keys) {
      switch(key){
        case "border":
           this.el.nativeElement.style.border = propMap.get("border");
           break;
        case "border-radius":
           this.el.nativeElement.style.borderRadius = propMap.get("border-radius");
           break;
        case "background":
           this.el.nativeElement.style.background = propMap.get("background");
           break;
        case "color":
          this.el.nativeElement.style.color = propMap.get("color");
          break;
        case "padding":
          this.el.nativeElement.style.padding = propMap.get('padding');
          break;
        case "font-size":
          this.el.nativeElement.style.fontSize = propMap.get('font-size');
          break;
      }
    }
  }
}
