export interface TabItem {
  id: string;
  label: string;
  value: string;
  count?: number;
}

export interface TabsConfig {
  defaultValue: string;
  items: TabItem[];
}
