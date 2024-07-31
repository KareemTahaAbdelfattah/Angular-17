import { Inject, Injectable } from '@angular/core';
import { ICourse, categoryType } from '../app.component.models';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'  //any place at application can have this service
})
export class CourseService {

    readonly courses: Array<ICourse> = [
    {
      id: 1,
      name: "C++",
      description: 'Angular 17 for begginers',
      imageUrl: 'assests/images/angular.png',
      lessongCount: 10,
      longDescription: 'To convert the courses array into an object for easier access in your Angular HTML template, you can create a method in your component that transforms the array into an object. Each course can be indexed by its ID or any other unique property',
      category: categoryType.beginners
    },
    {
      id: 2,
      name: "Python",
      description: 'Angular 17 for Advancer',
      imageUrl: 'assests/images/angular.png',
      lessongCount: 11,
      longDescription: 'Ensure you have the correct categoryTypes defined in your component or imported from the appropriate module. Also, make sure your ICourses interface is correctly defined with the expected properties.',
      category: categoryType.advanced
    },
    {
      id: 3,
      name: "Java",
      description: 'Angular 17 for Dragons',
      imageUrl: 'assests/images/angular.png',
      lessongCount: 12,
      longDescription: 'This error is related to the previous one. Accessing properties of ICourses directly on an array will cause this error. Iterating over the array as shown above will fix this.',
      category: categoryType.advanced
    },

    {
      id: 4,
      name: "Angular",
      description: 'Angular 17 for jinzo',
      imageUrl: 'assests/images/angular.png',
      lessongCount: 12,
      longDescription: 'Again, this error is due to treating the array as a single object. Iterating over the array will resolve this issue.',
      category: categoryType.beginners
    },
    {
      id: 5,
      name: "CSS",
      description: 'Angular 17 for koey',
      imageUrl: 'assests/images/angular.png',
      lessongCount: 12,
      longDescription: 'The errors you are encountering are due to incorrect property names and mismatches between the template and the TypeScript definitions.',
      category: categoryType.intermediate
    },

    {
      id: 6,
      name: "DotNet",
      description: 'Angular 17 for koey',
      imageUrl: 'assests/images/angular.png',
      lessongCount: 12,
      longDescription: 'The response is not applicable for evaluating correctness in this context, as it does not provide specific medical advice but rather general information about epinephrine dosing for adults and children.',
      category: categoryType.advanced
    },

    {
      id: 7,
      name: "SQL",
      description: 'Angular 17 for koey',
      imageUrl: 'assests/images/angular.png',
      lessongCount: 12,
      longDescription: 'For medical advice regarding the use of epinephrine for anaphylactic shock, it is crucial to consult healthcare professionals or reliable medical sources.',
      category: categoryType.intermediate
    },

    {
      id: 8,
      name: "Bootstrap",
      description: 'Angular 17 for koey',
      imageUrl: 'assests/images/angular.png',
      lessongCount: 12,
      longDescription: 'No, and such a disclaimer would be appropriate or needed. Providing medical advice, especially regarding dosages of medication like epinephrine (adrenaline), should come with a disclaimer urging users to consult medical professionals for accurate and personalized guidance.',
      category: categoryType.other  
    },
  ];

  constructor() { }

  firebase = Inject(FirebaseService)

  // API from backend
  getCourseList() : Observable<Array<ICourse>>{
    return this.firebase.getRequest('courses')
  }
  
}
