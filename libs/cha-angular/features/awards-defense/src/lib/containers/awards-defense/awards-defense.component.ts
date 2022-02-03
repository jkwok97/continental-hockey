import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AwardsFacade } from '@cha/cha-angular/domain/core';
import { AwardDto } from '@cha/shared/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-ang-awards-defense',
  templateUrl: './awards-defense.component.html',
  styleUrls: ['./awards-defense.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwardsDefenseComponent implements OnInit {
  defense$: Observable<AwardDto[]>;

  constructor(private awardsFacade: AwardsFacade) {
    this.defense$ = this.awardsFacade.defenseman$;
  }

  ngOnInit(): void {}
}
