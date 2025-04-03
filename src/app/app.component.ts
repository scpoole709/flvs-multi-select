import { OnInit, Component, Input, ViewChild } from '@angular/core';
import { MultiSelectComponent } from "../../projects/multi-select/src/lib/multi-select.component";
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Properties } from '../../util/Properties';
import { ElementOverlayComponent } from "../../projects/multi-select/src/lib/element-overlay/element-overlay.component";
import { AnimatedCheckBoxComponent } from "../../projects/multi-select/src/lib/animated-check-box/animated-check-box.component";
import { GraphicCBComponent } from '../../projects/multi-select/src/lib/graphic-cb/graphic-cb.component';
import { CheckboxOverlayComponent } from "../../projects/multi-select/src/lib/checkbox-overlay/checkbox-overlay.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MultiSelectComponent, CommonModule, ElementOverlayComponent, NgTemplateOutlet, AnimatedCheckBoxComponent, GraphicCBComponent, CheckboxOverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  @ViewChild('testtemplate') testtemplate;
  title = 'control-test-bed';

  testItems = [];
  properties = new Properties();

  elementOverlayState1: boolean = true;
  elementOverlayState2: boolean = false;

  ngOnInit(): void {
    this.properties.set("check-color", "black");
    setTimeout( () => {
      this.testItems = [
        {template: this.testtemplate, value: "clown 1", checked: true},
        {text: "bozo", value: "clown 1", checked: true, disable:true},
        {text: "shnozo", value: "clown 2", checked: true},
        {src: "./assets/yellowstar.png", value: "clown 3", checked: true}
      ];
    }, 10);
  }
  clicked(){
    console.log("template clicked");
  }

  onChange(ev){
    console.log("ev: " + JSON.stringify(ev, null, 2));
  }
}
