import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AwardsFacade } from '@cha/cha-angular/domain/core';
import { AwardDto } from '@cha/shared/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-ang-awards-season',
  templateUrl: './awards-season.component.html',
  styleUrls: ['./awards-season.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwardsSeasonComponent implements OnInit {
  season$: Observable<AwardDto[]>;

  constructor(private awardsFacade: AwardsFacade) {
    this.season$ = this.awardsFacade.awards$;
  }

  ngOnInit(): void {}
}
