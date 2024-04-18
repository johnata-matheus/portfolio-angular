import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { IEmail } from '../interfaces/IEmail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly APIUrl = `${environment.BASE_API_URL}/sending-email`;

  constructor(private httpClient: HttpClient) { }

  sendEmail(form: IEmail): Observable<IEmail>{
    return this.httpClient.post<IEmail>(this.APIUrl, form);
  }
}
