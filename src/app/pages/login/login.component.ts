import { Component, inject, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    imports: [
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
        MatProgressSpinner,
        ReactiveFormsModule,
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export default class LoginComponent {
    private formBuilder = inject(FormBuilder);
    private authService = inject(AuthService);
    private router = inject(Router);

    loader = signal(false);

    formGroup = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
    });

    submit() {
        this.loader.set(true);
        this.authService
            .login({
                username: this.formGroup.get('username')!.value!,
                password: this.formGroup.get('password')!.value!,
            })
            .subscribe(() => {
                this.router.navigate(['/']).then();
            });
    }
}
