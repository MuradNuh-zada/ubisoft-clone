export interface FilterItem {
  name: string;
  count: number;
}

export interface FilterGroup {
  title: string;
  items: FilterItem[];
}