import { HttpResponse, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Users } from '../users';
import {environment} from '../assets/environment.js';


@Injectable({
  providedIn: 'root'
})



export class UsersService {
  
  httpOptions = {
    headers: new HttpHeaders({ 
      // 'Content-Type': 'application/json',
    // 'AuthToken':'Testing'
  }),
    observe: 'response' as const
  };

  constructor(private http: HttpClient) {

   }


  getUsersService(): Observable<any> {
 
    return this.http.get<Users>(
      environment.apiUrl+'employees', this.httpOptions).pipe(        
        catchError(error => {
          console.log('error');
          console.log(error);
          return of(0);
        })
      );
  }
  saveUser(obj: Users): Observable<any> {
    const httpOptions = {
       headers: new HttpHeaders({
         // 'Content-Type': 'application/json',
         // 'AuthToken':'Testing'
       }),
       observe: 'response' as const
     };
     return this.http.post<Users>('http://localhost:3000/register/'+ 'test-api', obj, httpOptions).pipe(
       catchError(error => {
         console.log('error');
         console.log(error);
         return of(0);
       })
     )
   }
 
}
