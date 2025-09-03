import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'uhb/housekeeper/view-application/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'uhb/matron/view-allocation/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'uhb/admin/change-user-roles/:id',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
