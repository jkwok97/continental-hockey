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
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  constructor(private awardsFacade: AwardsFacade) {
    this.scorers$ = this.awardsFacade.awards$;
    this.isLoading$ = this.awardsFacade.isLoading$;
    this.isLoaded$ = this.awardsFacade.isLoaded$;
  }
  ngOnInit(): void {
    this.awardsFacade.getScorers();
  }
}
