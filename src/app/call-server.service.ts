import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DataModel } from './data-model';

@Injectable({
  providedIn: 'root'
})
export class CallServerService {

  constructor(
    private http: HttpClient
  ) { }

  public getData(): Observable<any> {
    const url = 'http://5a9f973d29d04a00142ff7fe.mockapi.io/api/new';
    return this.http.get(url).pipe(map((res: any) => {
      return res.map((item) => new DataModel().parseFromResp(item));
    }));
  }
}
