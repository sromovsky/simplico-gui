import { inject, Injectable } from '@angular/core';
import { AppStore } from '../app.store';

@Injectable({
    providedIn: 'root',
})
export class UserFacade {
    private appStore = inject(AppStore);

    get user() {
        return this.appStore.user;
    }

    get loggedIn() {
        return this.appStore.loggedIn;
    }

    logout() {
        this.appStore.logout();
    }
}
