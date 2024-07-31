import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { CourseService } from './services/course.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HandleErrorInterceptor } from './Interceptors/handle-error-interceptor';
import { AppTranslateModule } from './shared/modules/app-translate.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), CourseService, 
    {provide: HTTP_INTERCEPTORS, useClass: HandleErrorInterceptor, multi: true},
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(AppTranslateModule.forRoot()),
  ]
};
