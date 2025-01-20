import {Component, OnInit} from '@angular/core';
import {
  combineLatest,
  distinctUntilChanged,
  firstValueFrom,
  forkJoin,
  map,
  Observable,
  of,
  pipe,
  switchMap,
  take,
  takeUntil
} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../services/data.service';
import {IGigyaModuleItem} from '../interfaces/IGigyaModuleItem';
import {QueryParams} from '../constants/enums';


@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css'
})
export class TestPageComponent {
  protected gigyaModule$: Observable<IGigyaModuleItem | undefined> = this.getDisplayParams();
  constructor(private route: ActivatedRoute, private dataService: DataService) {
  }


  getDisplayParams(): Observable<IGigyaModuleItem> {
    return this.route.queryParams.pipe(
      distinctUntilChanged(),
      switchMap(async routeParams => {
        const data = await firstValueFrom(this.dataService.getTestById$(routeParams['id']));
        const startScreen = this.getStartScreen(data, routeParams);

        return {
          id: data?.id,
          name: data?.name,
          apiKey: data?.apiKey,
          environment: data?.environment,
          instructions: data?.instructions,
          url: data?.url,
          screenSet: routeParams[QueryParams.ScreenSet] || data?.screenSet,
          ...(startScreen && { startScreen: startScreen}),
          ...(routeParams[QueryParams.Language] && routeParams[QueryParams.Language] != 'en' && { selectedLang: routeParams[QueryParams.Language]}),
          ...(routeParams[QueryParams.Popup] && { popup: routeParams[QueryParams.Popup]}),
        } as IGigyaModuleItem
      })
    )
  }

  getStartScreen(data: any, routeParams: any): string | undefined{
    if(routeParams[QueryParams.ScreenSet])
      return routeParams[QueryParams.StartScreen];
    else
      return data?.startScreen ?? undefined
  }
}
