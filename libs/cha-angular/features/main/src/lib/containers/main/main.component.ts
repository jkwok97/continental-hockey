import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TeamDto, UserDto } from '@cha/shared/api';
import { AuthFacade } from '@cha/shared/auth/angular/auth-angular';
import { UserTeamFacade } from '@cha/cha-angular/domain/core';
import { filter, first, Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { mainMenuItems } from './main-menu-items';

@Component({
  selector: 'cha-ang-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  isLoading$: Observable<boolean>;
  currentTeam$: Observable<TeamDto | undefined>;
  currentUser$: Observable<UserDto | null>;

  items: MenuItem[] = mainMenuItems;

  constructor(
    private authFacade: AuthFacade,
    private userTeamFacade: UserTeamFacade
  ) {
    this.isLoading$ = this.userTeamFacade.isLoading$;
    this.currentTeam$ = this.userTeamFacade.currentUserTeam$;
    this.currentUser$ = this.authFacade.user$;
  }

  ngOnInit(): void {
    this.currentUser$
      .pipe(
        filter((user) => user !== null),
        first()
      )
      .subscribe((user: UserDto | null) => {
        if (user) {
          this.userTeamFacade.get(user.id);
        }
      });
  }
}
