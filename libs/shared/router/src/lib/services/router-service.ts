import { Injectable } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable()
export class RouterService {
  private loading = false;

  constructor(private router: Router) {}

  public init() {
    this.router.events.pipe(untilDestroyed(this)).subscribe((event: any) => {
      const item = this.getItem('route');
      switch (true) {
        case event instanceof NavigationStart: {
          if (!this.loading) {
            this.loading = true;

            if (item !== '/login') {
              this.setItem('route', item);
            } else {
              this.setItem('route', event.url);
            }
          }
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          if (this.loading) {
            this.loading = false;
            this.setItem('route', event.url);
          }
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    const item = localStorage.getItem(key);

    if (item) {
      return JSON.parse(item);
    } else {
      return null;
    }
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
