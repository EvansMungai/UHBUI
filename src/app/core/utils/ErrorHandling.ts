import { HttpErrorResponse } from "@angular/common/http";

export interface ErrorInterface {
    message: string,
    detail: string
}
export function extractErrorMessage(err: any): ErrorInterface | any {
    if (err instanceof HttpErrorResponse) {
        return { message: err.error.message, detail: err.error.detail }
    } else {
        return err
    }
}