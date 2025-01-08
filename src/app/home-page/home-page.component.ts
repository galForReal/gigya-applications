import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  protected modules$;

  constructor(private router: Router, private testService: DataService) {
    this.modules$ = this.testService.getData();
  }
}
