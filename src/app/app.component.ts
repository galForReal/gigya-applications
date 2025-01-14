import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IndexGridComponent} from './index-grid/index-grid.component';
import {DataService} from './services/data.service';
import {Observable} from 'rxjs';
import {IGigyaModuleItem} from './interfaces/IGigyaModuleItem';
import {AsyncPipe, CommonModule} from '@angular/common';
import {ThemingService} from '@fundamental-ngx/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GigyaApplications';
  protected modules$;

  constructor(private testService: DataService, private themingService: ThemingService) {
    this.themingService.setTheme('sap_horizon');
    this.modules$ = this.testService.data;
  }

  navigate(){

  }
}
