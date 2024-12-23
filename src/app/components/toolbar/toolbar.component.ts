import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { AppStore } from '../../app.store';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'app-toolbar',
    imports: [
        MatButton,
        MatIcon,
        MatToolbar,
        RouterLink,
        MatMenu,
        MatMenuItem,
        MatMenuTrigger,
    ],
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
    private appStore = inject(AppStore);
    private router = inject(Router);

    user = this.appStore.user;

    logout() {
        this.appStore.logout();
        this.router.navigate(['/login']).then();
    }
}
