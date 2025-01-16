import {Component, Input} from '@angular/core';
import {DataService} from '../services/data.service';
import {IGigyaModuleItem} from '../interfaces/IGigyaModuleItem';
import {Observable} from 'rxjs';
import {QueryParams} from '../constants/enums';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-url-viewer',
  templateUrl: './url-viewer.component.html',
  styleUrl: './url-viewer.component.css'
})
export class UrlViewerComponent {
  @Input() url:string | undefined = "";
  @Input() lang?: string;
  //item$ : Observable<IGigyaModuleItem | undefined> = this.dataService.getTestById$(this.route.snapshot.queryParamMap.get(QueryParams.ID));
  constructor(private route: ActivatedRoute, private dataService: DataService) {}
}
