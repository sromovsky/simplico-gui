import {
    patchState,
    signalStore,
    withComputed,
    withMethods,
    withProps,
    withState,
} from '@ngrx/signals';
import { computed, inject, resource } from '@angular/core';
import { HealthcheckService } from './services/healthcheck.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './types/api/user.interface';
import { DOCUMENT } from '@angular/common';

export const AppStore = signalStore(
    { providedIn: 'root' },
    withState(() => {
        const localStorage = inject(DOCUMENT).defaultView?.localStorage;
        const token = localStorage?.getItem('token') || '';
        return { token };
    }),
    withProps(() => ({
        _healthcheckService: inject(HealthcheckService),
    })),
    withProps((store) => ({
        _healthcheckResource: resource({
            loader: () => store._healthcheckService.getHealthcheck(),
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
    withMethods((store) => ({
        setToken(token: string): void {
            localStorage.setItem('token', token);
            patchState(store, () => ({ token }));
        },
    })),
    withMethods((store) => ({
        logout(): void {
            store.setToken('');
        },
    })),
);
