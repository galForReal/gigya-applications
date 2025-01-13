import {KeyValue} from '@angular/common';

export interface IGigyaModuleItem {
  id: string,
  name: string,
  instructions: Array<string | ILinkInformation>,
  description: string,
  apiKey: string,
  screenSet: string,
  startScreen?: string,
  environment: string,
  languages: KeyValue<string, string>[] | undefined,
  selectedLang: string | undefined
}

export interface ILinkInformation {
  linkText:string;
  screenSet: string,
  startScreen?: string,
  preLinkText?: string
  postLinkText?: string
}


