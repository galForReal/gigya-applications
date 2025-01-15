import {Component, Inject, Input, NgZone, OnChanges} from '@angular/core';
import {DOCUMENT} from "@angular/common";


declare let gigya: any;

export class _Window extends Window{
  onGigyaServiceReady?: () => void;
  gigya?: any;
}

@Component({
  selector: 'app-gigya-screen-set',
  templateUrl: './gigya-screen-set.component.html',
  styleUrl: './gigya-screen-set.component.css'
})

export class GigyaScreenSetComponent implements OnChanges {
  @Input() apiKey?: string;
  @Input() screenSet?: string;
  @Input() startScreen?: string;
  @Input() environment?: string;
  @Input() lang?: string;
  @Input() popup?: boolean;
  globalWindow: any;
  isLoading: boolean = true;

  constructor(@Inject(DOCUMENT) private document: Document, private zone: NgZone) {
    this.globalWindow = document.defaultView;
  }

  ngOnChanges(): void {
    this.loadScript();

    if(this.globalWindow) {
      if (this.globalWindow.gigya){
        this.showScreenSet();
      }
      else {
        this.globalWindow.onGigyaServiceReady = () => {
          this.showScreenSet();
        };
      }
    }
  }

  showScreenSet(){
    setTimeout(() =>
      gigya.accounts.showScreenSet({
        ...(!this.popup && { containerID: 'containerId'}),
        screenSet: this.screenSet,
        ...(this.startScreen && { startScreen: this.startScreen}),
        ...(this.lang && { 'lang': this.lang}),
        onAfterScreenLoad: () => {
          this.zone.run(() => this.handleScreenLoad());
        },
        onError: (error: any) => {
          this.zone.run(() => this.handleError(error));
        }
      }), 2000)
  }

  handleScreenLoad(): void {
    this.isLoading = false; // Hide the loader when the screen is ready
  }

  handleError(error: any): void {
    this.isLoading = false; // Also hide the loader on error to avoid infinite loading
  }


  loadScript() {
    let script: HTMLElement | null;

    script = document.getElementById('gigya-id');
    if(script && (script as HTMLScriptElement)?.src.indexOf(this.apiKey || '') > -1)
      return;

    if(!script) {
      let node = document.createElement('script');
      node.src = `https://cdns.${this.environment}.gigya.com/js/gigya.js?apikey=${this.apiKey}`;
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      node.id = "gigya-id";
      document.getElementsByTagName('head')[0].appendChild(node);
    }
    else {
      script.setAttribute('src', `https://cdns.${this.environment}.gigya.com/js/gigya.js?apikey=${this.apiKey}`)
    }
  }


}

