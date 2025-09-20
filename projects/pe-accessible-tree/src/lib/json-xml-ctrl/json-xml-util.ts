export interface PETreeItem {
  arrow?: number;
  hideAttributes?: boolean;
  hideChildren?: boolean;
  attributes?: PETreeItem[];
  hidden?: boolean;
  id?: number;
  display: string;
  type?: string;
  cls?: string;
  children?: PETreeItem[];
}
