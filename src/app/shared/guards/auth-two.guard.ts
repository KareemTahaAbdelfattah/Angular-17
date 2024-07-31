import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authTwoGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  return token ? true: Inject(Router).navigateByUrl('/account/login');
};
