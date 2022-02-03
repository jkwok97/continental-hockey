import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AwardDto } from '../models';

@Injectable()
export class AwardsService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getAll(): Observable<AwardDto[]> {
    return this._http
      .get(`${this.apiUrl}/v2/awards`)
      .pipe(map((result: any) => result['result']));
  }
}
