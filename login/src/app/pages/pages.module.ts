import { NgModule } from '@angular/core';
import { EmptyComponent } from './empty/empty.component';
import { ReactComponent } from './micro/react/react.component';
import { VueComponent } from './micro/vue/vue.component';


@NgModule({
  declarations: [
    EmptyComponent,
    VueComponent,
    ReactComponent,
  ],
  exports: [
    EmptyComponent,
    VueComponent,
    ReactComponent,
  ]
})
export class PagesModule { }
