import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class GigyaService {
  readonly SCRIPT_ID = 'gigya-id';
  private gigyaReadyCallback: (() => void) | null = null;
  private readonly globalWindow: any;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.globalWindow = document.defaultView;
  }

  set callback(callback: () => void) {
    this.gigyaReadyCallback = callback;
  }

  loadGigyaScript(apiKey: string | undefined, environment: string | undefined) {
    let script = document.getElementById(this.SCRIPT_ID);
    if(script && (script as HTMLScriptElement)?.src.indexOf(apiKey || '') > -1)
      return;

    if(!script) {
      let node = document.createElement('script');
      node.src = `https://cdns.${environment}.gigya.com/js/gigya.js?apikey=${apiKey}`;
      node.type = 'text/javascript';
      node.async = true;
      node.id = this.SCRIPT_ID;
      node.onload = () => {};
      document.getElementsByTagName('head')[0].appendChild(node);
    }
    else {
      script.setAttribute('src', `https://cdns.${environment}.gigya.com/js/gigya.js?apikey=${apiKey}`);
    }

    this.globalWindow.onGigyaServiceReady = () => {
        if (this.gigyaReadyCallback) {
          this.gigyaReadyCallback();
        }
      }
    };
}

