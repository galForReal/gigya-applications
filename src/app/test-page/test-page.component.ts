import {Component, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../services/data.service';
import {IGigyaModuleItem} from '../interfaces/IGigyaModuleItem';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css'
})
export class TestPageComponent implements OnInit{
  protected gigyaModule$: Observable<IGigyaModuleItem | undefined> = this.testService.getTestById(this.route.snapshot.queryParamMap.get('id'));
  protected apikey: string | undefined;
  protected screenSet: string | undefined;
  protected startScreen: string | undefined;

  constructor(private route: ActivatedRoute, private testService: DataService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.apikey = params['apiKey'] ?? undefined;
      this.screenSet = params['screenSet'] ?? undefined;
      this.startScreen = params['startScreen'] ?? undefined;
    });
  }
}
