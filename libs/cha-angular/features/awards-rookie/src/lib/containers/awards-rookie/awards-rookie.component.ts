import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AwardsFacade } from '@cha/cha-angular/domain/core';
import { AwardDto } from '@cha/shared/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-ang-awards-rookie',
  templateUrl: './awards-rookie.component.html',
  styleUrls: ['./awards-rookie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwardsRookieComponent implements OnInit {
  rookies$: Observable<AwardDto[]>;
  isLoading$: Observable<boolean>;

  constructor(private awardsFacade: AwardsFacade) {
    this.rookies$ = this.awardsFacade.rookies$;
    this.isLoading$ = this.awardsFacade.isLoading$;
  }

  ngOnInit(): void {
    this.awardsFacade.getRookies();
  }
}
