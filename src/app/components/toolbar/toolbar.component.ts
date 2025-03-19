import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { UserFacade } from '../../facades/user.facade';

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
    private userFacade = inject(UserFacade);
    private router = inject(Router);

    user = this.userFacade.user;
    loggedIn = this.userFacade.loggedIn;

    logout() {
        this.userFacade.logout();
        this.router.navigate(['/login']).then();
    }
}
