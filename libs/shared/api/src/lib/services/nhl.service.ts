import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
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
  ): Observable<NhlPlayerStatDto[]> {
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
      .get(`${this.apiUrl}/nhl-leaders/summary`, options)
      .pipe(map((result: any) => result['data']));
  }

  getNHLGoaliesummary(
    season: string,
    player: string,
    statsType: string,
    sort: string,
    start: number,
    pageSize: number
  ): Observable<NhlGoalieStatDto[]> {
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
      .get(`${this.apiUrl}/nhl-leaders/summary`, options)
      .pipe(map((result: any) => result['data']));
  }

  getNHLRookiesummary(
    season: string,
    player: string,
    statsType: string,
    sort: string,
    start: number,
    pageSize: number
  ): Observable<NhlPlayerStatDto[]> {
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
      .pipe(map((result: any) => result['data']));
  }
}
