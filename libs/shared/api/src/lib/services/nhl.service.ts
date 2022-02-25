import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  catchError,
  debounceTime,
  delay,
  first,
  map,
  tap,
} from 'rxjs/operators';
import { combineLatest, Observable, of, switchMap } from 'rxjs';
import { NhlGoalieStatDto, NhlPlayerStatDto } from '../models';

@Injectable()
export class NhlService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getAllLeaders(season: string, sort: string, trim: string) {
    return combineLatest([
      this.getNhlLeaders(season, 'skater', 'points', sort, trim),
      this.getNhlLeaders(season, 'skater', 'goals', sort, trim),
      this.getNhlLeaders(season, 'skater', 'assists', sort, trim),
      this.getNhlRookieLeaders(season, 'skater', 'points'),
      this.getNhlRookieLeaders(season, 'skater', 'goals'),
      this.getNhlRookieLeaders(season, 'skater', 'assists'),
      this.getNhlLeaders(season, 'goalie', 'gaa', sort, trim),
      this.getNhlLeaders(season, 'goalie', 'savePctg', sort, trim),
      this.getNhlLeaders(season, 'goalie', 'shutouts', sort, trim),
      this.getNhlDefenseLeaders(season, 'skater', 'points'),
      this.getNhlDefenseLeaders(season, 'skater', 'goals'),
      this.getNhlDefenseLeaders(season, 'skater', 'assists'),
    ]).pipe(
      map(
        ([
          points,
          goals,
          assists,
          rookiePoints,
          rookieGoals,
          rookieAssists,
          gaa,
          savePct,
          shutouts,
          defensePoints,
          defenseGoals,
          defenseAssists,
        ]) => ({
          points,
          goals,
          assists,
          rookiePoints,
          rookieGoals,
          rookieAssists,
          gaa,
          savePct,
          shutouts,
          defensePoints,
          defenseGoals,
          defenseAssists,
        })
      )
    );
  }

  getNhlLeaders(
    season: string,
    player: string,
    stat: string,
    sort: string,
    trim: string
  ) {
    const options = {
      params: new HttpParams()
        .set('season', season)
        .set('playerType', player)
        .set('statType', stat)
        .set('sort', sort)
        .set('qty', trim),
    };
    return this._http.get(`${this.apiUrl}/nhl-leaders/`, options);
  }

  getNhlRookieLeaders(season: string, player: string, stat: string) {
    const options = {
      params: new HttpParams()
        .set('season', season)
        .set('playerType', player)
        .set('statType', stat),
    };
    return this._http.get(`${this.apiUrl}/nhl-rookie-leaders/`, options);
  }

  getNhlDefenseLeaders(season: string, player: string, stat: string) {
    const options = {
      params: new HttpParams()
        .set('season', season)
        .set('playerType', player)
        .set('statType', stat),
    };
    return this._http.get(`${this.apiUrl}/nhl-defense-leaders/`, options);
  }

  getNHLsummary(
    season: string,
    player: string,
    statsType: string,
    sort: string,
    start: number,
    pageSize: number
  ): Observable<{ stats: NhlPlayerStatDto[]; total: number }> {
    const options = {
      params: new HttpParams()
        .set('season', season)
        .set('playerType', player)
        .set('statsType', statsType)
        .set('sort', sort)
        .set('start', start)
        .set('pageSize', pageSize),
    };
    return this._http.get(`${this.apiUrl}/nhl-leaders/summary`, options).pipe(
      map((result: any) => {
        result['data'].forEach(
          (stat: NhlPlayerStatDto) =>
            (stat = this.getPlayerStatsWithChaLogo(stat))
        );
        return { stats: result['data'], total: result['total'] };
        // return result['data'];
      }),
      delay(500)
    );
  }

  getNHLGoaliesummary(
    season: string,
    player: string,
    statsType: string,
    sort: string,
    start: number,
    pageSize: number
  ): Observable<{ stats: NhlGoalieStatDto[]; total: number }> {
    const options = {
      params: new HttpParams()
        .set('season', season)
        .set('playerType', player)
        .set('statsType', statsType)
        .set('sort', sort)
        .set('start', start)
        .set('pageSize', pageSize),
    };
    return this._http.get(`${this.apiUrl}/nhl-leaders/summary`, options).pipe(
      map((result: any) => {
        result['data'].forEach(
          (stat: NhlGoalieStatDto) =>
            (stat = this.getGoalieStatsWithChaLogo(stat))
        );
        return { stats: result['data'], total: result['total'] };
      }),
      delay(1000)
    );
  }

  getNHLRookiesummary(
    season: string,
    player: string,
    statsType: string,
    sort: string,
    start: number,
    pageSize: number
  ): Observable<{ stats: NhlPlayerStatDto[]; total: number }> {
    const options = {
      params: new HttpParams()
        .set('season', season)
        .set('playerType', player)
        .set('statsType', statsType)
        .set('sort', sort)
        .set('start', start)
        .set('pageSize', pageSize),
    };
    return this._http
      .get(`${this.apiUrl}/nhl-rookie-leaders/summary`, options)
      .pipe(
        map((result: any) => {
          result['data'].forEach(
            (stat: NhlPlayerStatDto) =>
              (stat = this.getPlayerStatsWithChaLogo(stat))
          );
          return { stats: result['data'], total: result['total'] };
        }),
        delay(500)
      );
  }

  getPlayerStatsWithChaLogo(stat: NhlPlayerStatDto): NhlPlayerStatDto {
    this.getPlayerTeamLogo(stat.playerId)
      .pipe(first())
      .subscribe((logo) => {
        if (logo && logo.teamlogo) {
          stat.chaTeam = logo.teamlogo;
        } else {
          stat.chaTeam = '';
        }
      });
    return stat;
  }

  getPlayerTeamLogo(nhlId: number): Observable<{ teamlogo: string }> {
    return this._http
      .get(`${this.apiUrl}/v2/players/nhl/${nhlId}`)
      .pipe(map((result: any) => result['result']));
  }

  getGoalieStatsWithChaLogo(stat: NhlGoalieStatDto): NhlGoalieStatDto {
    this.getGoalieTeamLogo(stat.playerId)
      .pipe(
        first(),
        catchError(() => of(null))
      )
      .subscribe((logo) => {
        if (logo && logo.teamlogo) {
          stat.chaTeam = logo.teamlogo;
        } else {
          stat.chaTeam = '';
        }
      });
    return stat;
  }

  getGoalieTeamLogo(nhlId: number): Observable<{ teamlogo: string }> {
    return this._http
      .get(`${this.apiUrl}/v2/goalies/nhl/${nhlId}`)
      .pipe(map((result: any) => result['result']));
  }
}
