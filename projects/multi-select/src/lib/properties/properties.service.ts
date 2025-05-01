import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  defaultProperties = new Map<string, Map<string, string>>();
  constructor() {
    this.loadDefaults();
  }

  loadDefaults(){
    this.defaultProperties.set("checkbox-cb", new Map());
    let map = this.defaultProperties.get("checkbox-cb");
    map.set("font-size", '32px');

    this.defaultProperties.set("open-button", new Map());
    map = this.defaultProperties.get("open-button");
    map.set("border", "solid 1px black");
    map.set("border-radius", "0");
    map.set("background", "white");
    map.set("color", "black");
    map.set("padding", ".5em");
    map.set("font-size", '11pt');

    this.defaultProperties.set("checkbox-proxy", new Map());
    // map = this.defaultProperties.get("checkbox-proxy");
    // map.set("border", "solid 1px black");
    // map.set("border-radius", "0");
    // map.set("background", "white");
    // map.set("color", "black");
    // map.set("padding", "0 0 0 0");

    this.defaultProperties.set("graphic-cb", new Map());
    map = this.defaultProperties.get("graphic-cb");
    map.set("border", "solid 1px black");
    map.set("border-radius", "0");
    map.set("background", "white");
    // map.set("padding", "0 0 0 0");

    this.defaultProperties.set("graphic-cb-check", new Map());
    map = this.defaultProperties.get("graphic-cb-check");
    map.set("border", "solid 0 1px 1px 0 red");
    map.set("border-radius", "0px");
  }

  getProperties(name): Map<string, string> {
    return this.defaultProperties.get(name);
  }
}
