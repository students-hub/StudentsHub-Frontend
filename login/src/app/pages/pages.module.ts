import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NzButtonModule, NzCheckboxModule, NzFormModule, NzIconModule, NzInputModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserOutline, LockOutline, EyeOutline, EyeInvisibleOutline, GithubOutline } from '@ant-design/icons-angular/icons';
import { VueComponent } from './micro/vue/vue.component';


@NgModule({
  declarations: [
    LoginComponent,
    VueComponent,
  ],
  imports: [
    CommonModule,    
    NzIconModule.forChild([
      UserOutline, LockOutline,
      EyeOutline, EyeInvisibleOutline,
      GithubOutline
    ]),
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
    VueComponent,
  ]
})
export class PagesModule { }
