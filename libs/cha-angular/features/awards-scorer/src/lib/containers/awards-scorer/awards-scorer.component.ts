import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AwardsFacade } from '@cha/cha-angular/domain/core';
import { AwardDto } from '@cha/shared/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-ang-awards-scorer',
  templateUrl: './awards-scorer.component.html',
  styleUrls: ['./awards-scorer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwardsScorerComponent implements OnInit {
  scorers$: Observable<AwardDto[]>;

  constructor(private awardsFacade: AwardsFacade) {
    this.scorers$ = this.awardsFacade.scorers$;
  }
  ngOnInit(): void {}
}
