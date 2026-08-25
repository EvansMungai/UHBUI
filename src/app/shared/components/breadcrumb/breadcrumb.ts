import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, startWith } from 'rxjs';
import { BreadcrumbInterface } from '../../../core/interfaces/Breadcrumb';

@Component({
  imports: [RouterLink],
  selector: 'app-breadcrumb',
  styleUrl: './breadcrumb.css',
  templateUrl: './breadcrumb.html',
})
export class Breadcrumb {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly navigationEnd = toSignal(
    this.router.events.pipe(filter(event => event instanceof NavigationEnd), startWith(null)),
    { initialValue: null }
  );

  private buildBreadcrumbs(route: ActivatedRoute, url = '', breadcrumbs: BreadcrumbInterface[] = []): BreadcrumbInterface[] {
    for (const child of route.children) {
      const routeConfig = child.routeConfig;
      if (!routeConfig) {
        continue;
      }

      const segments = child.snapshot.url.map(segment => segment.path).filter(Boolean);
      const nextUrl = segments.length ? `${url}/${segments.join('/')}` : url;
      const breadCrumb = routeConfig.data?.['breadcrumb'];

      if(breadCrumb) {
        breadcrumbs.push({
          label: breadCrumb,
          url: nextUrl
        });
      }

      return this.buildBreadcrumbs(child, nextUrl, breadcrumbs);
    }
    return breadcrumbs;
  }

  readonly breadcrumbs = computed<BreadcrumbInterface[]>(() => {
    this.navigationEnd();

    return this.buildBreadcrumbs(this.activatedRoute.root);
  })
}
