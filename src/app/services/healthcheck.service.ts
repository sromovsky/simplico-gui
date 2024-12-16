import { Injectable } from '@angular/core';
import { Healthcheck } from '../types/api/healthcheck.interface';

@Injectable({
    providedIn: 'root',
})
export class HealthcheckService {
    async getHealthcheck(): Promise<Healthcheck> {
        return fetch('/api/healthcheck').then(
            (res) => res.json() as unknown as Healthcheck,
        );
    }
}
