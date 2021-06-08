import { InjectionToken, NgModule } from '@angular/core';

export const API_CONFIG = new InjectionToken<string>('API_prefix');

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    { provide: API_CONFIG, useValue: 'http://1.14.165.254:8088/' }
  ]
})
export class ServicesModule { }
