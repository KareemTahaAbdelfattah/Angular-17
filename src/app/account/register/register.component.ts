import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ValidationsService } from '../../services/validations.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.initFormModules();
  }

  userName = new FormControl<string>('test', {updateOn: 'blur', nonNullable: true});

  register(): void{
    
  }


  private initFormModules(): void{
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
      PasswordConfirm: ['', [Validators.required, Validators.minLength(8)]],
    }, {
      validators: ValidationsService.mustMatch('Password', 'PasswordConfirm'),
    });

  // this.form = new FormGroup({
  //   userName: this.userName,
  //   Email: new FormControl({value: '', disabled: false}),
  //   Password: new FormControl(''),
  //   PasswordConfirm: new FormControl('')
  // });
}

}
