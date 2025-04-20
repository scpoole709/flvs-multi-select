import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  defaultProperties = new Map();
  constructor() {
    this.loadDefaults();
   }

   loadDefaults(){
    this.defaultProperties.set("checkbox-cb", new Map());
    let map = this.defaultProperties.get("checkbox-cb");
    map.set("font-size", '32px');
   }

   getComponentProperties(name){
    return this.defaultProperties.get(name);
   }
}
