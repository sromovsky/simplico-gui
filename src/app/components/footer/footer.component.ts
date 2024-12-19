import { Component, computed, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { AppStore } from '../../app.store';

@Component({
    selector: 'app-footer',
    imports: [MatIcon],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {
    private appStore = inject(AppStore);

    healthcheckVersion = computed(() => this.appStore.healthcheck()?.version);
}
