import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { HandleErrorService } from "../services/handle-error.service";

@Injectable()


export class HandleErrorInterceptor implements HttpInterceptor{

    HandleErrors = Inject(HandleErrorService)

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(req).pipe(
            catchError(this.HandleErrors.HandleError)
        )
    }
}