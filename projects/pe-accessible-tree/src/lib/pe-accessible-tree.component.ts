import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JsonXmlCtrlComponent } from "./json-xml-ctrl/json-xml-ctrl.component";

@Component({
  selector: 'pe-accessible-tree',
  standalone: true,
  imports: [CommonModule, JsonXmlCtrlComponent],
  templateUrl: './pe-accessible-tree.component.html',
  styleUrl: './pe-accessible-tree.component.css'
})
export class PeAccessibleTreeComponent {

hidden = false;
  ulClicked(event){
    this.hidden = !this.hidden;
  }

  ulHidden(name: string){
    return this.hidden;
  }
}
