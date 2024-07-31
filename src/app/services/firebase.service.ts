import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HandleErrorService } from './handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  http = Inject(HttpClient)
  HandleErrors = Inject(HandleErrorService)

  getRequest<T>(name: String): Observable<T>{
    return this.http.get(`{firebaseURL}${name}.json`);
    // .pipe(
    //   catchError(this.HandleErrors.HandleError)
    // )
  }

}
