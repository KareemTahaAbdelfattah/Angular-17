import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


interface ILoginData{
  email: string,
  password: string,
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})


export class LoginComponent {

  loginDto: ILoginData = {
    email: 'kareemtaha@gmail.com',
    password: '01203458178',
  }

  Login(loginform: NgForm): void{
    //loginform.onSubmit(event);
    console.log('Loginform', loginform.valid, loginform.value);
  }
  OnEmailChange(email:string): void{
    console.log('email', email);
  }
  
  constructor(private Activatedroute: ActivatedRoute, private router: Router){

  }

  getNext(): void{
    this.router.navigateByUrl("account/register");
  }


}
