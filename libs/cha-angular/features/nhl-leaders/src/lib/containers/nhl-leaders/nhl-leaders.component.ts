import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { NhlLeadersFacade } from '../../+state/nhl-leaders.facade';

@Component({
  selector: 'cha-ang-nhl-leaders',
  templateUrl: './nhl-leaders.component.html',
  styleUrls: ['./nhl-leaders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NhlLeadersComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  constructor(private nhlLeadersFacade: NhlLeadersFacade) {
    this.isLoaded$ = this.nhlLeadersFacade.isLoaded$;
    this.isLoading$ = this.nhlLeadersFacade.isLoading$;
  }

  ngOnInit(): void {
    this.nhlLeadersFacade.getLeaders();
  }
}
