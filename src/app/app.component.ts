import { Component, inject, resource } from '@angular/core';
import { HealthcheckService } from './services/healthcheck.service';

@Component({
    selector: 'app-root',
    imports: [],
    templateUrl: './app.component.html',
})
export class AppComponent {
    private healthcheckService = inject(HealthcheckService);

    healthcheckResource = resource({
        loader: () => this.healthcheckService.getHealthcheck(),
    });
}
