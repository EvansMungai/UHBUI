import { Service } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastMessageOptions } from '../interfaces/ToastMessageOptions';

@Service()
export class ToastService {
    private messageSource = new Subject<ToastMessageOptions | ToastMessageOptions[]>();
    private clearSource = new Subject<string | null>();

    message$ = this.messageSource.asObservable();
    clear$ = this.clearSource.asObservable();

    add(message: ToastMessageOptions) {
        if(message){
            this.messageSource.next(message);
        }
    }

    addAll(messages: ToastMessageOptions[]){
        if(messages && messages.length) {
            this.messageSource.next(messages);
        }
    }

    clear(key?: string) {
        this.clearSource.next(key || null);
    }
}
