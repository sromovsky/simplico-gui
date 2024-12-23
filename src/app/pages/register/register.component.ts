import { Component, inject } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-register',
    imports: [MatFormField, MatInput, MatLabel, MatButton, ReactiveFormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export default class RegisterComponent {
    private formBuilder = inject(FormBuilder);
    private authService = inject(AuthService);

    formGroup = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        repeatPassword: ['', [Validators.required]],
    });

    submit() {
        this.authService
            .register({
                username: this.formGroup.get('username')!.value!,
                password: this.formGroup.get('password')!.value!,
            })
            .subscribe(() => {
                console.log('Registered successfully');
            });
    }
}
