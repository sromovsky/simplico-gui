import { signalStore, withComputed, withProps } from '@ngrx/signals';
import { computed, inject, resource } from '@angular/core';
import { HealthcheckService } from './services/healthcheck.service';

export const AppStore = signalStore(
    { providedIn: 'root' },
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
    })),
);
