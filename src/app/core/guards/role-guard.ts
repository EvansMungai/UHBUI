import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { inject } from '@angular/core';

export const roleGuard: CanActivateChildFn = (childRoute, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const requiredRoles = childRoute.parent?.data['roles'] as string[];
  const user = auth.getUser();

  if (!user) {
    return router.createUrlTree(['/auth'], { queryParams: { returnUrl: state.url } });
  }

  if (!requiredRoles?.length || auth.hasAnyRole(requiredRoles)) {
    return true;
  }

  return router.createUrlTree(['/access-denied']);
};
