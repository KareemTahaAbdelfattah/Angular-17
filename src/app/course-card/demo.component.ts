import { AfterContentInit, Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICourse, categoryType } from '../app.component.models';
import { Route, Router, RouterModule } from '@angular/router';
import { CourseListComponent } from '../course-list/course-list.component';
import { CourseDetailsComponent } from '../course-details/course-details.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {


  categor_Type = categoryType;
  date = new Date();

  @Input({required: true}) courses: ICourse = {} as ICourse;
  @Input({required: true}) index!: number;
  @Input({required: true}) title!: String;
  @Output() veiwCourseEvent = new EventEmitter<ICourse>();

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('changes: ', changes);
  // };
  // ngDoCheck(): void {
  //   console.log('%c ngDoCheck '+ this.courses.id,  'color: purple');
  // };
  // ngAfterContentInit(): void {
  //   console.log('%c ngAfterContentInit '+ this.courses.id,  'color: blue');
  // };

  // constructor(private router: Router){

  // };

  // onButtonClicked(): void{
  //   this.router.navigateByUrl('course-details/${this.courses.id}');
  //   this.veiwCourseEvent.emit(this.courses);
  // };

  constructor(private router: Router ){

  }

  // ViewCourse(): void{
  //   this.router.navigate(['course'], {queryParams: {id: 1}});
  // }

}