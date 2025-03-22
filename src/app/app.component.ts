import { OnInit, Component, Input, ViewChild } from '@angular/core';
import { MultiSelectComponent } from "./multi-select/multi-select.component";
import { CommonModule } from '@angular/common';
import { Properties } from '../../util/Properties';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MultiSelectComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  @ViewChild('testtemplate') testtemplate;
  title = 'control-test-bed';

  testItems = [];
  properties = new Properties();

  ngOnInit(): void {
    this.properties.set("check-color", "black");
    setTimeout( () => {
      this.testItems = [
        {template: this.testtemplate, value: "clown 1", checked: true},
        {text: "bozo", value: "clown 1", checked: true, disable:true},
        {text: "shnozo", value: "clown 2", checked: false},
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
