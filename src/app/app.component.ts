import { Component, inject, resource } from '@angular/core';
import { HealthcheckService } from './services/healthcheck.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [ToolbarComponent, RouterOutlet],
    templateUrl: './app.component.html',
})
export class AppComponent {
    private healthcheckService = inject(HealthcheckService);

    healthcheckResource = resource({
        loader: () => this.healthcheckService.getHealthcheck(),
    });
}
