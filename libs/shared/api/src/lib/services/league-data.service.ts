import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LeagueDataDto } from '../models';

@Injectable()
export class LeagueDataService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getLeagueData(): Observable<LeagueDataDto> {
    return this._http
      .get(`${this.apiUrl}/v2/league/current-data`)
      .pipe(map((result: any) => result['result'][0]));
  }
}
