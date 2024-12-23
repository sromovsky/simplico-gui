import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { AppStore } from '../../app.store';

@Component({
    selector: 'app-home',
    imports: [NgOptimizedImage, MatButton, RouterLink],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export default class HomeComponent {
    private appStore = inject(AppStore);

    user = this.appStore.user;
}
