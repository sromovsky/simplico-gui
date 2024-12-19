import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-home',
    imports: [NgOptimizedImage, MatButton],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export default class HomeComponent {}
