import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs';
import {IGigyaModuleItem} from '../interfaces/IGigyaModuleItem';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  protected data$: Observable<IGigyaModuleItem[]>;
  searchTerm: string | undefined;

  constructor(private router: Router, private dataService: DataService) {
    this.data$ = this.dataService.data$;
  }

  public handleSearchTermChange(searchTerm: string) {
    this.data$ = this.dataService.filterDataByName$(searchTerm);
  }

  public clearSearch(){
    this.searchTerm = '';
    this.handleSearchTermChange('');
  }

  ngOnInit(): void {
  }



}
