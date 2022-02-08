import { Inject, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpParamsOptions,
} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DraftPickDto, DraftTableDto } from '../models';

@Injectable()
export class DraftService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getDraftTable(
    draftYear: number,
    playingYear: string,
    seasonType: string
  ): Observable<DraftTableDto[]> {
    console.log(draftYear);
    console.log(playingYear);
    console.log(seasonType);
    const httpParams: HttpParamsOptions = {
      fromObject: {
        draft_year: draftYear.toString(),
        playing_year: playingYear.toString(),
        season_type: seasonType.toString(),
      },
    };

    const options = {
      params: new HttpParams(httpParams),
    };

    return this._http
      .get(`${this.apiUrl}/v2/draft-table/season/standings`, options)
      .pipe(map((result: any) => result['result']));
  }

  getDraftPicks(): Observable<DraftPickDto[]> {
    return this._http
      .get(`${this.apiUrl}/v2/draft/ordered`)
      .pipe(map((result: any) => result['result']));
  }
}
