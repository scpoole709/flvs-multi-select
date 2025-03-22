
export class Properties{
  propMap = new Map();
  set(key: "check-color", value: string){
    this.propMap.set(key, value);
  }
  get(key: "check-color"){
    return this.propMap.get(key);
  }
}
