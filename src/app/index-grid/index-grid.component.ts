import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IGigyaModuleItem} from '../interfaces/IGigyaModuleItem';
import {Router} from '@angular/router';
import {DefaultLanguages} from '../constants/consts';
import {DataService} from '../services/data.service';
import {AppStateService} from '../services/appStateService';

@Component({
  selector: 'app-index-grid',
  templateUrl: './index-grid.component.html',
  styleUrl: './index-grid.component.css'
})
export class IndexGridComponent implements OnChanges{
  @Input() data: IGigyaModuleItem[] | undefined;
  defaultLanguages = DefaultLanguages;
  currentPage = 1;
  itemsPerPage: number = 10;
  pageItems: IGigyaModuleItem[] | undefined;
  constructor(
    private router: Router,
    private dataService: DataService,
    private stateService: AppStateService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.dataService.isFiltered){
      this.stateService.setPage = 1;
    }
    this.currentPage = this.stateService.page;
    this.updateDisplayedItems();
  }

  switchChange(item : IGigyaModuleItem) {
    this.dataService.update(item);
  }

  newPageClicked(page: number) {
    this.stateService.setPage = page;
    this.currentPage = page;
    this.updateDisplayedItems();
  }

  updateDisplayedItems(): void {
    const startIndex = (this.stateService.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pageItems = this.data?.slice(startIndex, endIndex);
  }
}
