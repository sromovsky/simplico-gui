import { Component, inject, resource } from '@angular/core';
import { HealthcheckService } from '../../services/healthcheck.service';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-footer',
    imports: [MatIcon],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {
    private healthcheckService = inject(HealthcheckService);

    healthcheckResource = resource({
        loader: () => this.healthcheckService.getHealthcheck(),
    });
}
