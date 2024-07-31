import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './course-card/demo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SecureComponent } from './shared/components/secure/secure.component';
import { AuthGuard } from './shared/guards/auth.guards';
import { authTwoGuard } from './shared/guards/auth-two.guard';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'courses-list',
        component: CourseListComponent
    },
    {
        path: 'course',
        component: CourseDetailsComponent
    },
    {
        path: 'courses-list/:id',
        component: CourseDetailsComponent
    },
    {
        path: 'courses-list/:id',
        component: CourseDetailsComponent
    },
    {
        path: 'secure',
        loadChildren: () => import('./shared/components/secure/secure.module').then(m => m.SecureModule),
        // component: SecureComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'account',
        component: AccountComponent,
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: '', redirectTo: '/account/login' ,pathMatch: 'full'},
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
    },
    {
        path: '**',
        component: PagenotfoundComponent,
    }
];
