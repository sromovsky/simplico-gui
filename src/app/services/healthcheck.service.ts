import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Healthcheck } from '../types/api/healthcheck.interface';

@Injectable({
    providedIn: 'root',
})
export class HealthcheckService {
    private http = inject(HttpClient);

    getHealthcheck(): Observable<Healthcheck> {
        return this.http.get<Healthcheck>('/api/healthcheck');
    }
}
