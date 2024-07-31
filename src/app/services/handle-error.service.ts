import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor() { }

  // Handle request errors
  private HandleError(errorResponse: HttpErrorResponse): Observable<any>{
    // Front errors
    if(errorResponse.status === 0){
      console.log(`Error statuse in FrontSide ${errorResponse.status} = ${errorResponse.error}`);
    }else{
      console.log(`Error statuse in Backend ${errorResponse.status} = ${errorResponse.error}`)
    }
    // Back errors
    return throwError(() => new Error('Something bad happen, please try again later'));
  }
}
