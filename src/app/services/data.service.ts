import {Injectable} from '@angular/core';
import {IGigyaModuleItem} from "../interfaces/IGigyaModuleItem";
import {HttpClient} from '@angular/common/http';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/data.json';
  readonly _data:Observable<IGigyaModuleItem[]> = this.fetchData();

  constructor(private http: HttpClient) {}

  private fetchData(): Observable<IGigyaModuleItem[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
  get data():Observable<IGigyaModuleItem[]> {
    return this._data;
  }
  public getTestById(id: string | null): Observable<IGigyaModuleItem | undefined> {
    return this.data
      .pipe(
        map(results => results.find(test => test.id === id))
      );
  }
  public filterDataByName(searchTerm: string):Observable<IGigyaModuleItem[]>{
    if(searchTerm?.length <= 1){
      return this._data;
    }

    return this._data.pipe(
      map(array => array.filter((item) => item.name.toLowerCase().includes(searchTerm))));
  }
}
