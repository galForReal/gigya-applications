import {Component, Input, OnInit} from '@angular/core';
import {IGigyaModuleItem} from '../interfaces/IGigyaModuleItem';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {ThemingService} from '@fundamental-ngx/core';

@Component({
  selector: 'app-index-grid',
  templateUrl: './index-grid.component.html',
  styleUrl: './index-grid.component.css'
})
export class IndexGridComponent implements OnInit{
  @Input() data: IGigyaModuleItem[] | undefined;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
}
