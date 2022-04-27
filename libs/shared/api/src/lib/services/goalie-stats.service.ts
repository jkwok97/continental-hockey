import { Inject, Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GoalieStatDto, StatGoalieLeadersDto } from '../models';

@Injectable({
  providedIn: 'root',
})
export class GoalieStatsService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getGoaliesBySeasonByType(
    season: string,
    seasonType: string
  ): Observable<GoalieStatDto[]> {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/goalies-stats/season/current`, options)
      .pipe(map((result: any) => result['result']));
  }

  getGoaliesBySeasonByTypeByTeam(
    id: number,
    season: string,
    seasonType: string
  ): Observable<GoalieStatDto[]> {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/goalies-stats/current/team/${id}`, options)
      .pipe(map((result: any) => result['result']));
  }

  getGoaliesByUserByType(
    id: number,
    seasonType: string
  ): Observable<GoalieStatDto[]> {
    const options = { params: new HttpParams().set('season_type', seasonType) };

    return this._http
      .get(`${this.apiUrl}/v2/goalies-stats/history/user/${id}`, options)
      .pipe(map((result: any) => result['result']));
  }

  getGoaliesByUserByShowByType(
    id: number,
    seasonType: string
  ): Observable<GoalieStatDto[]> {
    const options = { params: new HttpParams().set('season_type', seasonType) };

    return this._http
      .get(`${this.apiUrl}/v2/goalies-stats/show/history/user/${id}`, options)
      .pipe(map((result: any) => result['result']));
  }

  getGoaliesStatsByType(seasonType: string) {
    const options = { params: new HttpParams().set('season_type', seasonType) };

    return this._http
      .get(`${this.apiUrl}/v2/goalies-stats/type/season`, options)
      .pipe(map((result: any) => result['result']));
  }

  getGoaliesStatsByTypeSummed(seasonType: string) {
    const options = { params: new HttpParams().set('season_type', seasonType) };

    return this._http
      .get(`${this.apiUrl}/v2/goalies-stats/type/all-time`, options)
      .pipe(map((result: any) => result['result']));
  }

  getGoalieStatsById(id: number) {
    return this._http
      .get(`${this.apiUrl}/v2/goalies-stats/player/${id}`)
      .pipe(map((result: any) => result['result']));
  }

  // ==================================== LEADERS ==========================================

  getAllGoalieLeaders(
    season: string,
    seasonType: string,
    minGames: number
  ): Observable<StatGoalieLeadersDto> {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType)
        .set('min_games', minGames),
    };

    return this._http
      .get(`${this.apiUrl}/v2/goalies-stats/leaders/all-leaders`, options)
      .pipe(map((result: any) => result['result']));
  }
}
