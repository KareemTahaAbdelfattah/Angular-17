import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { ManageLessonComponent } from './manage-lesson/manage-lesson.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ManageCourseComponent,
    ManageLessonComponent,
  ],
  imports: [
    CommonModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
