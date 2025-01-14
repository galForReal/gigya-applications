import {Component, OnInit} from '@angular/core';
import {combineLatest, map, Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {DataService} from '../services/data.service';
import {IGigyaModuleItem} from '../interfaces/IGigyaModuleItem';
import {QueryParams} from '../constants/enums';


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
    const dataParams$ = this.testService.getTestById(this.route.snapshot.queryParamMap.get(QueryParams.ID));
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
            screenSet: routeParams[QueryParams.ScreenSet] || data?.screenSet,
            ...(startScreen && { startScreen: startScreen}),
            ...(routeParams[QueryParams.Language] && routeParams[QueryParams.Language] != 'en' && { selectedLang: routeParams[QueryParams.Language]}),
            ...(routeParams[QueryParams.Popup] && { popup: routeParams[QueryParams.Popup]}),
          } as IGigyaModuleItem
        })
      );
  }

  getStartScreen(data: any, routeParams: any): string | undefined{
    if(routeParams[QueryParams.StartScreen])
      return routeParams[QueryParams.StartScreen] ?? undefined;
    else
      return data?.startScreen ?? undefined
  }
}
