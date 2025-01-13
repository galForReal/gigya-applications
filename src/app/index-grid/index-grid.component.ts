import {Component, Input, OnInit} from '@angular/core';
import {IGigyaModuleItem} from '../interfaces/IGigyaModuleItem';
import {Router} from '@angular/router';
import {DefaultLanguages} from '../constants/consts';

@Component({
  selector: 'app-index-grid',
  templateUrl: './index-grid.component.html',
  styleUrl: './index-grid.component.css'
})
export class IndexGridComponent implements OnInit{
  @Input() data: IGigyaModuleItem[] | undefined;
  searchTerm: string | undefined;
  displayData:IGigyaModuleItem[] | undefined;
  defaultLanguages = DefaultLanguages;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.displayData = this.data;
  }

  handleSearchTermChange(searchTerm: string) {
    if(searchTerm.length)
      this.displayData = this.displayData?.filter((item) => item.name.toLowerCase().includes(searchTerm));
    else
      this.displayData = this.data;
  }
}
