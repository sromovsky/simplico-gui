import {
    patchState,
    signalStore,
    withComputed,
    withMethods,
    withProps,
    withState,
} from '@ngrx/signals';
import { computed, inject, DOCUMENT } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { HealthcheckService } from './services/healthcheck.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './types/api/user.interface';

export const AppStore = signalStore(
    { providedIn: 'root' },
    withState(() => {
        const localStorage = inject(DOCUMENT).defaultView?.localStorage;
        const token = localStorage?.getItem('token') || '';
        return { token };
    }),
    withProps(() => ({
        _localStorage: inject(DOCUMENT).defaultView?.localStorage,
        _healthcheckService: inject(HealthcheckService),
    })),
    withProps((store) => ({
        _healthcheckResource: rxResource({
            stream: () => store._healthcheckService.getHealthcheck(),
        }),
    })),
    withComputed((store) => ({
        healthcheck: computed(() => store._healthcheckResource.value()),
        user: computed(() => {
            const token = store.token();
            if (!token) {
                return null;
            }
            const jwt = new JwtHelperService();
            return jwt.decodeToken(token) as User;
        }),
    })),
    withComputed((store) => ({
        loggedIn: computed(() => {
            return !!store.user();
        }),
    })),
    withMethods((store) => ({
        setToken(token: string): void {
            store._localStorage?.setItem('token', token);
            patchState(store, () => ({ token }));
        },
    })),
    withMethods((store) => ({
        logout(): void {
            store.setToken('');
        },
    })),
);
