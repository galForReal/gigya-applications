import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {map, Observable} from 'rxjs';
import {IGigyaModuleItem} from '../interfaces/IGigyaModuleItem';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  protected modules$ =  this.testService.getData();
  protected data$: Observable<IGigyaModuleItem[]>;
  searchTerm: string | undefined;

  constructor(private router: Router, private testService: DataService) {
    this.data$ = this.modules$;
  }

  public handleSearchTermChange(searchTerm: string) {
    if(searchTerm?.length <= 1){
      this.data$ = this.modules$;
      return;
    }

    this.data$ = this.modules$.pipe(
        map(array => array.filter((item) => item.name.toLowerCase().includes(searchTerm))
      ));
  }



}
