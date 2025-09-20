import { FormsModule } from '@angular/forms';
import { PETreeItem } from './json-xml-util';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { LinkDefinitions, AttributeDefinitions, JXDefinition, JsonDef } from './json-definitions';
import { LiarrowComponent } from './liarrow.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'json-xml-ctrl',
  standalone: true,
  imports: [CommonModule, FormsModule, LiarrowComponent],
  templateUrl: './json-xml-ctrl.component.html',
  styleUrls: ['./json-xml-ctrl.component.css']
})
export class JsonXmlCtrlComponent implements OnInit {

  @ViewChild("scrolldiv", {static:true}) scroll;

  @Output() onClick = new EventEmitter<{event:MouseEvent, item: PETreeItem, attr:boolean}>();
  @Output() itemChanged = new EventEmitter<PETreeItem>();

  @Input() showCheckboxes:boolean = true;

  isTree = false;
  hasChanges = false;

  constructor() { }

  ngOnInit() {
    setTimeout( () => {
      this.scroll.nativeElement.scrollTop = JsonXmlCtrlComponent.lastScrollPos;
    }, 10);

    let root = this.createRoot("Spagetti");
    let child = this.createChild(root, "First Child");
    let attr = this.createAttribute(root, "First Attribute");
     attr = this.createAttribute(child, "First Child Attribute");
    child = this.createChild(root, "Bush Master1");

    root = this.createRoot("Spagetti");
    child = this.createChild(root, "First Child");
    attr = this.createAttribute(root, "First Attribute");
    attr = this.createAttribute(child, "First Child Attribute");
    child = this.createChild(root, "Bush Master2");
  }

  static lastScrollPos = 0;
  onScroll(event)
  {
    JsonXmlCtrlComponent.lastScrollPos = this.scroll.nativeElement.scrollTop;
  }

  list: PETreeItem[] = [];

  createBase(text: string): PETreeItem {
    const item: PETreeItem = { display: text, children: [], attributes: [], hideChildren: true};
    return item;
  }

  createRoot(text: string): PETreeItem {
    const item = this.createBase(text);
    item.type = "Root";
    item.arrow = 1;
    this.list.push(item);
    this.setItemClass(item);
    return item;
  }

  createChild(parent: PETreeItem, text: string): PETreeItem {
    const item = this.createBase(text);
    item.type = "Child";
    item.arrow = 0;
    this.setItemClass(item);
    parent.children.push(item);
    parent.arrow = 1;
    return item;
  }

  createAttribute(parent: PETreeItem, text: string): PETreeItem {
    const item: PETreeItem = { display: text};
    item.type = "Attribute";
    item.arrow = 1;
    item.children = [];
    this.setItemClass(item);
    parent.attributes.push(item);
    parent.arrow = 1;
    return item;
  }

  setVisibility( item: PETreeItem): void {

    item.children.forEach( each => {
      each.hideChildren = true;

      // if (each instanceof PETreeItem){
      //   this.setVisibility(each);
      // }
    });
  }

  attrTooltip(attr: PETreeItem)
  {
    return attr.display;
  }

  arrowStyle(item)
  {
    if (item.hidden)
      return -1;
    if (item.children.length == 0 && item.attributes.length == 0)
      return 0;
    if (item.hideChildren)
      return 1;

    return 2;
  }

  open(event, item: PETreeItem)
  {
    item.hideChildren = !item.hideChildren;
  }

  itemClicked(event:MouseEvent, item:PETreeItem)
  {
    event.stopPropagation();
    if (!event.ctrlKey)
    {
      item.hideChildren = !item.hideChildren;
      item.arrow = this.arrowStyle(item);

    }
    this.onClick.next({event:event, item:item, attr:false});
  }

  attrClicked(event:MouseEvent, item:PETreeItem)
  {
    event.stopPropagation();
    this.onClick.next({event:event, item:item, attr:true});
  }

  isNumber( s:string):boolean
  {
    return !Number.isNaN(Number.parseInt(s));
  }

  itemDrop(event:any[], item: PETreeItem) {
  //   this.hasChanges = true;
  //   let ie = new ItemEvent();
  //   ie.item = item;
  //   ie.itemParent = this.findParent(this.list, item.id);
  //   ie.data = event[1];

  //   if (Object.prototype.toString.call(event[1]) == '[object String]')
  //   {
  //     ie.data = event[1];
  //     ie.defType = "STRING";
  //   }
  //   else if (Object.prototype.toString.call(event[1]) == '[object Number]')
  //   {
  //     ie.data = this.findItem(event[1]);
  //     if (this.findParent(this.list, event[1]) == ie.itemParent)
  //       ie.defType = "ITEMCHANGEORDER";
  //     else
  //       ie.defType = "ITEMCHANGEPARENT";
  //   }
  //   else
  //   {
  //     ie.data = event[1];
  //     ie.defType = (<JXDefinition>event[1]).defType;
  //   }

  //   ie.action = "dropped";

  //   let keys = event[3];

  //   ie.ctrl = keys.ctrl;
  //   ie.shift = keys.shift;

  //   this.itemChanged.next(ie);
  }

  getId(item)
  {
    return item.id;
  }

  // findItemParent(child:PETreeItem): PETreeItem {
  //   return this.findParent(this.list, child.id);
  // }

  // findParent(parent:PETreeItem, childID:number): PETreeItem {
  //   return this.jdfDB.findParentOfId(parent, childID);
  // }

  setItemOpen(id:number)
  {
    for (const item of this.list){
       let found = this.findItem(item, id);
        if (!!found && (<PETreeItem>found).hideChildren) {
          (<PETreeItem>found).hideChildren = false;
          return;
        }
      }
  }

  findItem(parent: PETreeItem, id:number): PETreeItem {
    if (parent.id == id){
      return parent;
    }
    for (const item of parent.children){
      if (item.id == id){
        return item;
      }
      let found = this.findItem(item, id);
      if (!!found){
        return found;
      }
    }
    return null;
  }


  setItemClass ( event: PETreeItem )
  {
    switch (event.type)
    {
    case "Root":
      event.cls = "base-style group-style";
      break;

    case "Child":
      event.cls = "base-style member-style";
      break;

    case "Attribute":
      event.cls = "base-style link-style";
      break;

    default:
      event.cls = "base-style member-style";
      break;
    }
  }


  // findItemAttribute(id:number): JDBase {
  //   return this.jdfDB.findAttributeId(this.list, id);
  // }

  // focusEdit(item:JDBase, index)
  // {
  //   SpanEditComponent.focusEdit(item.id, index);
  // }

  // updateItem(item:JDBase)
  // {
  //   if (!(item instanceof PETreeItem))
  //   {
  //     item = this.jdfDB.findParentOfId(this.list, item.id);
  //   }

  //   if (item)
  //   {
  //     (<PETreeItem>item).hideChildren = true;
  //     setTimeout( i => {
  //       i.hideChildren = false;
  //     }, 1, <PETreeItem>item);
  //   }
  // }
}

// export class ItemEvent {
//   item:JDBase
//   itemParent: JDBase;
//   data:any;
//   defType:string;
//   ctrl:boolean;
//   shift:boolean;
//   action:string; // added, changed, deleted, edited
// }
