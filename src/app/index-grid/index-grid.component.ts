import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {IGigyaModuleItem} from '../interfaces/IGigyaModuleItem';
import {Router} from '@angular/router';
import {DefaultLanguages} from '../constants/consts';
import {DataService} from '../services/data.service';

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
  displayedItems: IGigyaModuleItem[] | undefined;
  constructor(private router: Router, private dataService: DataService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentPage = 1;
    this.updateDisplayedItems();
  }

  switchChange(item : IGigyaModuleItem) {
    this.dataService.update(item);
  }

  newPageClicked(page: number) {
    this.currentPage = page;
    this.updateDisplayedItems();
  }

  updateDisplayedItems(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedItems = this.data?.slice(startIndex, endIndex);
  }
}
