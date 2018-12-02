import { BaseService } from "./base.service";
import { Http,Headers,Response, RequestOptions } from "@angular/http";

import { Observable, of, Subject, Subscription, merge,fromEvent, from  } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { PlatformType } from "../PlatformType/Models/PlatformType";

@Injectable()
export class PlatformTypeService extends BaseService {
    constructor(private http: Http) { super(); }


      //versão 4
      // obterTodos(): Observable<Developer[]> {
      //   return this.http.get(this.UrlServiceV1 + "developers")
      //     .map((res: Response) => <Developer[]>res.json())
      //     .catch(super.serviceError);          
      // }

      //versão 6
      obterTodos(): Observable<PlatformType[]> {
        return this.http.get(this.UrlServiceV1 + "platformType")
        .pipe(
          map((res: Response) => <PlatformType[]>res.json(),
          catchError(super.serviceError)));            
      }
}