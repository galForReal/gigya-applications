import {Component, OnInit} from '@angular/core';
import {combineLatest, map, Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {DataService} from '../services/data.service';
import {IGigyaModuleItem} from '../interfaces/IGigyaModuleItem';


@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css'
})
export class TestPageComponent implements OnInit{
  protected gigyaModule$: Observable<IGigyaModuleItem | undefined> = this.getDisplayParams();
  constructor(private route: ActivatedRoute, private testService: DataService) {
  }

  ngOnInit(): void {}

  getDisplayParams(): Observable<IGigyaModuleItem> {
    const dataParams$ = this.testService.getTestById(this.route.snapshot.queryParamMap.get('id'));
    const routeParams$ = this.route.queryParams;

    return combineLatest([dataParams$, routeParams$])
      .pipe(
        map(([data, routeParams]) => {
          const startScreen = this.getStartScreen(data, routeParams);
          return {
            id: data?.id,
            name: data?.name,
            apiKey: data?.apiKey,
            environment: data?.environment,
            instructions: data?.instructions,
            screenSet: routeParams['screenSet'] || data?.screenSet,
            ...(startScreen && { startScreen: startScreen}),
            ...(routeParams['lang'] && routeParams['lang'] != 'en' && { selectedLang: routeParams['lang']}),
            ...(routeParams['popup'] && { popup: routeParams['popup']}),
          } as IGigyaModuleItem
        })
      );
  }

  getStartScreen(data: any, routeParams: any): string | undefined{
    if(routeParams['screenSet'])
      return routeParams['startScreen'] ?? undefined;
    else
      return data?.startScreen ?? undefined
  }
}
