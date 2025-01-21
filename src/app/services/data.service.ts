import {Injectable} from '@angular/core';
import {IGigyaModuleItem} from "../interfaces/IGigyaModuleItem";
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, filter, first, firstValueFrom, map, Observable, of} from "rxjs";
import {STORAGE_NAME} from '../constants/consts';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly dataUrl = 'assets/data.json';
  private _data = new BehaviorSubject<IGigyaModuleItem[]>([]);
  private _isFiltered: boolean = false;

  constructor(private http: HttpClient) {}


  get data$():Observable<IGigyaModuleItem[]> {
    const savedState = this.getSavedState();

    if(savedState){
      this._data.next(savedState.data);
    }
    else if(!this._data.value?.length)
    {
      this.populateData();
    }

    return this._data.asObservable();
  }

  private async populateData(){
    const data= await firstValueFrom(this.http.get<any[]>(this.dataUrl));
    this._data.next(data);
    await this.saveState(data);
  }


  get isFiltered(): boolean{
    return this._isFiltered;
  }
  public getTestById$(id: string | null): Observable<IGigyaModuleItem | undefined> {
    return this.data$
      .pipe(
        map(results => results.find(test => test.id === id)),
        filter(x => x != undefined)
      );
  }
  public filterDataByName$(searchTerm: string):Observable<IGigyaModuleItem[]>{
    if(searchTerm?.length <= 1){
      this._isFiltered = false;
      return this.data$;
    }

    this._isFiltered = true;
    return this.data$.pipe(
      map(array => array.filter((item) => item.name.toLowerCase().includes(searchTerm))));
  }
  public async update(item:IGigyaModuleItem){
    const clone = this._data.value;
    const index = clone.findIndex(x=> x.id == item.id);
    if(index > -1){
      clone[index] = item;
      this._data.next(clone);
      await this.saveState(clone);
    }
  }

  private async saveState(data:IGigyaModuleItem[]) {
    const stateObject = {
      data: data,
    };
    localStorage.setItem(STORAGE_NAME, JSON.stringify(stateObject));
  }

  private getSavedState() {
    const session = localStorage.getItem(STORAGE_NAME);
    return session ? JSON.parse(session) : undefined;
  }

}
