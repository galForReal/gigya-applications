import {Injectable} from '@angular/core';
import {IGigyaModuleItem} from "../interfaces/IGigyaModuleItem";
import {HttpClient} from '@angular/common/http';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {
  }

  getData(): Observable<IGigyaModuleItem[]> {
    return this.http.get<any[]>(this.dataUrl);
  }

  getTestById(id: string | null): Observable<IGigyaModuleItem | undefined> {
    return this.getData()
      .pipe(
        map(results => results.find(test => test.id === id))
      );
  }
}
