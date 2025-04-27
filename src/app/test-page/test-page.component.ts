import {Component} from '@angular/core';
import {
  distinctUntilChanged,
  firstValueFrom,
  Observable,
  switchMap,
} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
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
  formState: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService) {}

  toggleScreenMode(fullMode: string | undefined) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {'fullMode' : !this.isFullMode(fullMode) },
      queryParamsHandling: 'merge',
    });

  }
  instructionWidth(fullMode: string | undefined){
    return this.isFullMode(fullMode) ?  0 : 3;
  }
  mainWidth(fullMode: string | undefined){
    return this.isFullMode(fullMode) ?  12 : 9;
 }

 isFullMode(fullMode: string | undefined){
    return fullMode == 'true'
 }

  getDisplayParams(): Observable<IGigyaModuleItem> {
    return this.route.queryParams.pipe(
      distinctUntilChanged(),
      switchMap(async routeParams => {
        const data = await firstValueFrom(this.dataService.getTestById$(routeParams[QueryParams.ID]));
        const startScreen = this.getStartScreen(data, routeParams);

        return {
          id: data?.id,
          name: data?.name,
          apiKey: data?.apiKey,
          environment: data?.environment,
          instructions: data?.instructions,
          url: data?.url,
          screenSet: routeParams[QueryParams.ScreenSet] || data?.screenSet,
          fullMode: routeParams[QueryParams.FullMode],
          ...(startScreen && { startScreen: startScreen}),
          ...(routeParams[QueryParams.Language] && routeParams[QueryParams.Language] != 'en' && { selectedLang: routeParams[QueryParams.Language]}),
          ...(routeParams[QueryParams.Popup] && { popup: routeParams[QueryParams.Popup]}),
        } as IGigyaModuleItem;
      })
    )
  }

  getStartScreen(data: any, routeParams: any): string | undefined{
    if(routeParams[QueryParams.ScreenSet])
      return routeParams[QueryParams.StartScreen];
    else
      return data?.startScreen ?? undefined
  }

  onFormStatus($event: string) {
    this.formState = $event;
  }
}
