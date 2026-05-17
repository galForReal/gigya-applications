import {Component} from '@angular/core';
import {ThemingService} from '@fundamental-ngx/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GigyaApplications';
  showDialog = false;

  unsupportedStandards = [
    { standard: 'ACC-283.4', reason: 'Text spacing' },
    { standard: 'ACC-262.4', reason: 'Black theme' },
    { standard: 'ACC-262.5', reason: 'White theme' },
    { standard: 'ACC-264.1', reason: 'Item count reading' },
  ];

  constructor(private themingService: ThemingService) {
    this.themingService.setTheme('sap_horizon');
  }
}
