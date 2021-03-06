import { BaseService } from "./base.service";
import { Http,Headers,Response, RequestOptions } from "@angular/http";
import { Developer } from "../developer/Models/developer";
import { Observable, of, Subject, Subscription, merge,fromEvent, from  } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class DeveloperService extends BaseService {
    constructor(private http: Http) { super(); }

    adicionarDeveloper(developer: Developer): Observable<Developer> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
    
        let jsons = JSON.stringify(developer);
        let response = this.http
          .post(this.UrlServiceV1 + "developers", developer, options)
          .pipe(
          map(super.extractData),catchError(super.serviceError)
          );
        return response;
      };

      //versão 4
      // obterTodos(): Observable<Developer[]> {
      //   return this.http.get(this.UrlServiceV1 + "developers")
      //     .map((res: Response) => <Developer[]>res.json())
      //     .catch(super.serviceError);          
      // }

      //versão 6
      obterTodos(): Observable<Developer[]> {
        return this.http.get(this.UrlServiceV1 + "developers")
        .pipe(
          map((res: Response) => <Developer[]>res.json(),
          catchError(super.serviceError)));            
      }
}