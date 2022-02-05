import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AwardsFacade, DisplayFacade } from '@cha/cha-angular/domain/core';
import { AwardDto } from '@cha/shared/api';

import { Observable } from 'rxjs';

@Component({
  selector: 'cha-ang-awards-champions',
  templateUrl: './awards-champions.component.html',
  styleUrls: ['./awards-champions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwardsChampionsComponent implements OnInit {
  champions$: Observable<AwardDto[]>;
  isMobile$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(
    private awardsFacade: AwardsFacade,
    private displayFacade: DisplayFacade
  ) {
    this.champions$ = this.awardsFacade.champions$;
    this.isMobile$ = this.displayFacade.isMobile$;
    this.isLoading$ = this.awardsFacade.isLoading$;
  }

  ngOnInit(): void {
    this.awardsFacade.getChampions();
  }
}
