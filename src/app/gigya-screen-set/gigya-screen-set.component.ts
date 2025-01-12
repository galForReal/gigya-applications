import {Component, Inject, Input, OnChanges, OnInit} from '@angular/core';
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
  globalWindow: any;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.globalWindow = document.defaultView;
  }

  ngOnChanges(): void {
    this.loadScript();

    if(this.globalWindow) {
      if (this.globalWindow.gigya){

        setTimeout(()=> {
          gigya.accounts.showScreenSet({
            containerID:'containerId',
            screenSet: this.screenSet,
            startScreen: this.startScreen
          });
        },2000)

      }
      else {
        this.globalWindow.onGigyaServiceReady = () => {
          gigya.accounts.showScreenSet({
            containerID: 'containerId',
            screenSet: this.screenSet,
            ...this.startScreen  && { 'startScreen': this.startScreen },
          });
        };
      }
    }
  }

  loadScript() {
    let script: HTMLElement | null;

    script = document.getElementById('gigya-id');
    if(script){
      script.remove();
    }
    //else (!script) {
      let node = document.createElement('script');
      node.src = `https://cdns.${this.environment}.gigya.com/js/gigya.js?apikey=${this.apiKey}`;
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      node.id = "gigya-id";
      document.getElementsByTagName('head')[0].appendChild(node);
    //}


    // else {
    //   script.setAttribute('src', `https://cdns.${this.environment}.gigya.com/js/gigya.js?apikey=${this.apiKey}`)
    // }
  }


}

