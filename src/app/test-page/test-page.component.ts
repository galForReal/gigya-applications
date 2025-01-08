import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../services/data.service';
import {IGigyaModuleItem} from '../interfaces/IGigyaModuleItem';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css'
})
export class TestPageComponent {
  protected gigyaModule$: Observable<IGigyaModuleItem | undefined> = this.testService.getTestById(this.route.snapshot.paramMap.get('id'));

  constructor(private route: ActivatedRoute, private testService: DataService) {
  }
}
