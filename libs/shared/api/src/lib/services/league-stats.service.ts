import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { statTeamDto } from '../models';

@Injectable()
export class LeagueDataService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getTeamStatsByUser(id: number, seasonType: string) {
    const options = { params: new HttpParams().set('season_type', seasonType) };

    return this._http
      .get(`${this.apiUrl}/v2/team-stats/${id}/type`, options)
      .pipe(map((result: any) => result['result']));
  }

  getTeamStatsByTeamIdBySeasonbyType(
    id: number,
    season: string,
    seasonType: string
  ) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/team-stats/season/team/${id}`, options)
      .pipe(map((result: any) => result['result'][0]));
  }

  getTeamStatsBySeasonByType(
    season: string,
    seasonType: string
  ): Observable<statTeamDto[]> {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/team-stats/season`, options)
      .pipe(map((result: any) => result['result']));
  }

  getTeamStatsBySeasonByTypeByConference(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/team-stats/season/conference`, options)
      .pipe(map((result: any) => result['result']));
  }

  getTeamStatsBySeasonByTypeByDivision(season: string, seasonType: string) {
    const options = {
      params: new HttpParams()
        .set('playing_year', season)
        .set('season_type', seasonType),
    };

    return this._http
      .get(`${this.apiUrl}/v2/team-stats/season/division`, options)
      .pipe(map((result: any) => result['result']));
  }

  getTeamStatsByType(seasonType: string) {
    const options = { params: new HttpParams().set('season_type', seasonType) };

    return this._http
      .get(`${this.apiUrl}/v2/team-stats/type/season`, options)
      .pipe(map((result: any) => result['result']));
  }

  getTeamStatsByTypeSummed(seasonType: string) {
    const options = { params: new HttpParams().set('season_type', seasonType) };

    return this._http
      .get(`${this.apiUrl}/v2/team-stats/type/all-time`, options)
      .pipe(map((result: any) => result['result']));
  }

  getScheduleTeamStats(season: string, id: number) {
    const options = { params: new HttpParams().set('playing_year', season) };

    return this._http
      .get(`${this.apiUrl}/v2/team-stats/schedule/team/${id}`, options)
      .pipe(map((result: any) => result['result']));
  }
}
