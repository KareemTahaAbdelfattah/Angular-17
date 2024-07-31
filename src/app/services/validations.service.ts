import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {


  static mustMatch(controlName: string, matchingControlName: string): ValidatorFn{
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control = formGroup.get(controlName);
      const controlMatch = formGroup.get(matchingControlName);
      if(!control || !controlMatch){
        return null;
      }
      if(control.value !== controlMatch.value){
        controlMatch.setErrors({mustMatch: true});
        return {mustMatch: true};
      }else{
        controlMatch.setErrors(null);
        return null;
      }
    };
  }

}
