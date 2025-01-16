import {Component} from '@angular/core';
import {ThemingService} from '@fundamental-ngx/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GigyaApplications';

  constructor(private themingService: ThemingService) {
    this.themingService.setTheme('sap_horizon');
  }
}
