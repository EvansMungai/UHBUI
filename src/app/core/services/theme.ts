import { effect, Service, signal } from '@angular/core';

@Service()
export class Theme {
    private readonly storageKey = 'theme';
    readonly darkMode = signal(this.getInitialTheme());

    constructor() {
        effect(() => {
            const dark = this.darkMode();
            document.documentElement.classList.toggle('dark', dark);
            localStorage.setItem(
                this.storageKey,
                dark ? 'dark' : 'light'
            );
        });
    }

    toggle(): void {
        this.darkMode.update(value => !value);
    }

    private getInitialTheme(): boolean {
        if (typeof localStorage !== 'undefined') {
            const savedTheme = localStorage.getItem(this.storageKey);
            if (savedTheme === 'dark') {
                return true;
            }
            if (savedTheme === 'light') {
                return false;
            }
        }
        return (
            typeof window !== 'undefined' &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        );
    }
}
