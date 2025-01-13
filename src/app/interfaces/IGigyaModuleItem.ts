export interface IGigyaModuleItem {
  id: string,
  name: string,
  instructions: Array<string | ILinkInformation>,
  description: string,
  apiKey: string,
  screenSet: string,
  startScreen?: string,
  environment: string
}

export interface ILinkInformation {
  linkText:string;
  screenSet: string,
  startScreen?: string,
  preLinkText?: string
  postLinkText?: string
}


