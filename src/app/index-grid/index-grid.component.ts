import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IGigyaModuleItem} from '../interfaces/IGigyaModuleItem';
import {Router} from '@angular/router';
import {DefaultLanguages} from '../constants/consts';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-index-grid',
  templateUrl: './index-grid.component.html',
  styleUrl: './index-grid.component.css'
})
export class IndexGridComponent implements OnInit{
  @Input() data: IGigyaModuleItem[] | undefined;
  defaultLanguages = DefaultLanguages;

  constructor(private router: Router, private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  switchChange(item : IGigyaModuleItem) {
    this.dataService.update(item);
  }
}
