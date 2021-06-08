import { Injectable } from '@angular/core';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class LocalStorageService {

  constructor() {}

  public get<T>(key: string): any {
    return JSON.parse(localStorage.getItem(key)) as T;
  }

  public getList<T>(key: string) {
    const before = localStorage.getItem(key);
    return before? (JSON.parse(before) as T[]) : [];
  }

  public set(key: string, value: any): void {
    if (!value && value === undefined) {
      return;
    }
    const arr = JSON.stringify(value);
    localStorage.setItem(key, arr);
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }
}