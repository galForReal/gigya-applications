import {Component, Inject, Input, NgZone, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {GigyaService} from '../services/gigya.service';

@Component({
  selector: 'app-gigya-screen-set',
  templateUrl: './gigya-screen-set.component.html',
  styleUrl: './gigya-screen-set.component.css'
})

export class GigyaScreenSetComponent implements OnChanges , OnInit{
  @Input() apiKey?: string;
  @Input() screenSet?: string;
  @Input() startScreen?: string;
  @Input() environment?: string;
  @Input() lang?: string;
  @Input() popup?: string | undefined;
  globalWindow: any;
  isLoading: boolean = true;

  constructor(
    private gigyaService: GigyaService,
    @Inject(DOCUMENT) private document: Document,
    private zone: NgZone) {
    this.globalWindow = document.defaultView;
  }

  ngOnInit(): void {
    //this.loadScript();
    this.gigyaService.callback = () => {this.showScreenSet();};
    this.gigyaService.loadGigyaScript(this.apiKey, this.environment);


  }

  ngOnChanges(changes: SimpleChanges): void {
    // monitor route query params change
    if (!changes['apiKey']) {
        this.showScreenSet();
      }
  }

  showScreenSet(){
    this.globalWindow['gigya']?.accounts?.showScreenSet({
      ...(this.popup !== 'true' && {containerID: 'containerId'}),
      screenSet: this.screenSet,
      ...(this.startScreen && {startScreen: this.startScreen}),
      //...(this.lang && {lang: this.lang}),
      onAfterScreenLoad: () => {
        this.zone.run(() => this.handleScreenLoad());
      },
      onError: (error: any) => {
        this.zone.run(() => this.handleError(error));
      }
    });
  }

  handleScreenLoad(): void {
    this.isLoading = false;
  }

  handleError(error: any): void {
    this.isLoading = false;
  }
}

