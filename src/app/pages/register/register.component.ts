import { Component, inject, signal } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    imports: [
        MatFormField,
        MatInput,
        MatLabel,
        MatButton,
        ReactiveFormsModule,
        MatProgressSpinner,
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export default class RegisterComponent {
    private formBuilder = inject(FormBuilder);
    private authService = inject(AuthService);
    private router = inject(Router);

    loader = signal(false);

    formGroup = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        repeatPassword: ['', [Validators.required]],
    });

    submit() {
        if (this.formGroup.valid) {
            this.loader.set(true);
            this.authService
                .register({
                    username: this.formGroup.get('username')!.value!,
                    password: this.formGroup.get('password')!.value!,
                })
                .subscribe(() => {
                    this.router.navigate(['/login']).then();
                });
        }
    }
}
