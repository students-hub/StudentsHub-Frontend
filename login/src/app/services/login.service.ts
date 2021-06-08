import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_CONFIG } from './services.module';
import { map } from 'rxjs/internal/operators';
import { ServicesModule } from './services.module';

export interface LoginParam {
  user_name: string,
  password: string,
};

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(
    private http: HttpClient,
    // @Inject(API_CONFIG) private prefix: string,
  ) {}

  login(loginParam: LoginParam) {
    return this.http.post('http://1.14.165.254:8088' + '/user/login', loginParam);
  }
}
