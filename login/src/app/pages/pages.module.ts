import { NgModule } from '@angular/core';
import { EmptyComponent } from './empty/empty.component';
import { VueComponent } from './micro/vue/vue.component';


@NgModule({
  declarations: [
    EmptyComponent,
    VueComponent,
  ],
  exports: [
    EmptyComponent,
    VueComponent,
  ]
})
export class PagesModule { }
