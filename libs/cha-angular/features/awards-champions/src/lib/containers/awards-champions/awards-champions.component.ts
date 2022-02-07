import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AwardsFacade } from '@cha/cha-angular/domain/core';
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
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  constructor(private awardsFacade: AwardsFacade) {
    this.champions$ = this.awardsFacade.awards$;
    this.isLoading$ = this.awardsFacade.isLoading$;
    this.isLoaded$ = this.awardsFacade.isLoaded$;
  }

  ngOnInit(): void {
    this.awardsFacade.getChampions();
  }
}
