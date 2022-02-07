import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AwardsFacade } from '@cha/cha-angular/domain/core';
import { AwardDto } from '@cha/shared/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-ang-awards-gm',
  templateUrl: './awards-gm.component.html',
  styleUrls: ['./awards-gm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwardsGmComponent implements OnInit {
  gm$: Observable<AwardDto[]>;

  constructor(private awardsFacade: AwardsFacade) {
    this.gm$ = this.awardsFacade.awards$;
  }

  ngOnInit(): void {}
}
