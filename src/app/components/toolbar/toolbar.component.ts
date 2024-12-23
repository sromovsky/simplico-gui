import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { AppStore } from '../../app.store';

@Component({
    selector: 'app-toolbar',
    imports: [MatButton, MatIcon, MatToolbar, RouterLink],
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
    private appStore = inject(AppStore);

    user = this.appStore.user;
}
