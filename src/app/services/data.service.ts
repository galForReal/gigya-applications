import {Injectable} from '@angular/core';
import {IGigyaModuleItem} from "../interfaces/IGigyaModuleItem";
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, firstValueFrom, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/data.json';
  private _data = new BehaviorSubject<IGigyaModuleItem[]>([]);

  constructor(private http: HttpClient) {}

  private async populateData(){
    const data= await firstValueFrom(this.http.get<any[]>(this.dataUrl));
    this._data.next(data);
  }

  get data$():Observable<IGigyaModuleItem[]> {
    if(!this._data.value?.length)
      this.populateData();
    return this._data.asObservable();
  }

  public getTestById$(id: string | null): Observable<IGigyaModuleItem | undefined> {
    return this.data$
      .pipe(
        map(results => results.find(test => test.id === id))
      );
  }
  public filterDataByName$(searchTerm: string):Observable<IGigyaModuleItem[]>{
    if(searchTerm?.length <= 1){
      return this.data$;
    }

    return this.data$.pipe(
      map(array => array.filter((item) => item.name.toLowerCase().includes(searchTerm))));
  }

  public update(item:IGigyaModuleItem){
    const clone = this._data.value;
    const index = clone.findIndex(x=> x.id == item.id);
    if(index > -1){
      clone[index] = item;
      this._data.next(clone);
    }
  }
}
