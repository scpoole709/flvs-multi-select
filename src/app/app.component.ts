import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiSelectComponent } from "./multi-select/multi-select.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MultiSelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'control-test-bed';

  testItems = [
    {text: "bozo", value: "clown 1"},
    {text: "shnozo", value: "clown 2"},
    {src: "./assets/yellowstar.png", value: "clown 3"}
  ]
}
