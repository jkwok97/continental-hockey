import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';

import { UserDto } from '@cha/shared/api';
import { AppConfigModel, APP_CONFIG } from '@cha/cha-angular/domain/app-config';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { AuthFacade } from '../+state/auth.facade';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';

@UntilDestroy()
@Injectable()
export class AuthService {
  constructor(
    private authFacade: AuthFacade,
    private http: HttpClient,
    @Optional() @Inject(APP_CONFIG) private appConfig: AppConfigModel
  ) {}

  init(email: string) {
    this.authFacade.login(email);

    const foundUser = localStorage.getItem('currentUser');

    // if (foundUser) {
    //   this.currentUserSubject = new BehaviorSubject<UserDto>(
    //     JSON.parse(foundUser)
    //   );
    //   this.currentUser = this.currentUserSubject.asObservable();
    //   this.currentUser
    //     .pipe(
    //       filter((user: UserDto) => user !== null),
    //       tap((user: UserDto) => this.authFacade.loginSuccess(user)),
    //       untilDestroyed(this)
    //     )
    //     .subscribe();
    // } else {
    //   // this.login(email);
    // }
  }

  login(email: string) {
    return this.http
      .get<UserDto[]>(`${this.appConfig.apiUrl}/v2/users/${email}`)
      .pipe(
        map((users: UserDto[]) => {
          console.log(users[0]);
          return users[0];
        })
      );
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.authFacade.logout();
  }

  onError() {
    this.authFacade.loginFailed();
  }

  loginSuccess(user: UserDto) {
    this.authFacade.loginSuccess(user);
  }
}
