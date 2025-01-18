import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export class AppState{
  pageNumber:number = 1;
}

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private _state = new BehaviorSubject<AppState>(new AppState());

  get page(){
    debugger;
    return this._state.value.pageNumber;
  }

  set setPage(page:number){
    const clone = this._state.value;
    this._state.next({
      ...clone,
      pageNumber: page
    })
  }
  constructor() { }
}
