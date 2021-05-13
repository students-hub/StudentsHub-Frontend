import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    NzButtonModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
