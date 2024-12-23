import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { RegisterData } from '../types/api/register-data.interface';
import { LoginData } from '../types/api/login-data.interface';
import { AppStore } from '../app.store';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private http = inject(HttpClient);
    private appStore = inject(AppStore);

    register(data: RegisterData): Observable<void> {
        return this.http.post<void>('/api/auth/register', data);
    }

    login(data: LoginData): Observable<void> {
        return this.http.post<{ token: string }>('/api/auth/login', data).pipe(
            map((responseData) => {
                this.appStore.setToken(responseData.token);
            }),
        );
    }

    storedToken(): string | null {
        return localStorage.getItem('token');
    }
}
