import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AwardsFacade } from '@cha/cha-angular/domain/core';
import { AwardDto } from '@cha/shared/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-ang-awards-goalie',
  templateUrl: './awards-goalie.component.html',
  styleUrls: ['./awards-goalie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwardsGoalieComponent implements OnInit {
  goalies$: Observable<AwardDto[]>;

  constructor(private awardsFacade: AwardsFacade) {
    this.goalies$ = this.awardsFacade.goalies$;
  }

  ngOnInit(): void {}
}
