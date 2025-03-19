export interface TableColumn {
    key: string,
    header: string,
    sortable?: boolean
}
export interface TableAction {
    label: string,
    stylingClass?: string,
    callback: (row: any) => void;
}