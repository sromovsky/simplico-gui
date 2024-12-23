import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterData } from '../types/api/register-data.interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private http = inject(HttpClient);

    register(data: RegisterData): Observable<void> {
        return this.http.post<void>('/api/auth/register', data);
    }
}
