import { Component } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [ToolbarComponent, RouterOutlet, FooterComponent],
    templateUrl: './app.component.html',
})
export class AppComponent {}
