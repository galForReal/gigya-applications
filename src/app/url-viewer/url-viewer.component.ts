import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-url-viewer',
  templateUrl: './url-viewer.component.html',
  styleUrl: './url-viewer.component.css'
})
export class UrlViewerComponent {
  @Input() url:string | undefined = "";
  @Input() lang?: string;
  constructor() {}
}
