export interface ToastMessageOptions {
    id?: any
    key?: string
    summary?: string
    detail?: string
    life: number
    severity?: 'success' | 'error' | 'info' | 'warn'
    contentStyleClass?: string
    styleClass?: string
}