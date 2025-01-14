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

  displayData:IGigyaModuleItem[] | undefined;
  defaultLanguages = DefaultLanguages;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.displayData = this.data;
  }
}
