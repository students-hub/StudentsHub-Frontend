import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface RegisterParam {
  user_name: string,
  password: string,
  role: number,
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(registerParam: RegisterParam) {
    return this.http.post('http://1.14.165.254:8088' + '/user/sign-up', registerParam);
  }
}
