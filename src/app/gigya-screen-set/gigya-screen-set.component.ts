import {Component, Inject, Input, OnChanges} from '@angular/core';
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

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.globalWindow = document.defaultView;
  }

  ngOnChanges(): void {
    this.loadScript();

    if(this.globalWindow) {
      if (this.globalWindow.gigya){
        gigya.accounts.showScreenSet({
          ...(!this.popup && { containerID: 'containerId'}),
          screenSet: this.screenSet,
          ...(this.startScreen && { startScreen: this.startScreen}),
          ...(this.lang && { 'lang': this.lang})
        });
      }
      else {
        this.globalWindow.onGigyaServiceReady = () => {
          gigya.accounts.showScreenSet({
            ...(!this.popup && { containerID: 'containerId'}),
            screenSet: this.screenSet,
            ...(this.startScreen && { 'startScreen': this.startScreen}),
            ...(this.lang && { 'lang': this.lang})
          });
        };
      }
    }
  }

  showScreenSet(){
    gigya.accounts.showScreenSet({
      ...(!this.popup && { containerID: 'containerId'}),
      containerID:'containerId',
      screenSet: this.screenSet,
      ...(this.startScreen && { startScreen: this.startScreen}),
      ...(this.lang && { 'lang': this.lang})
    });
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

