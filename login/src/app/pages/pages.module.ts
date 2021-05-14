import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty/empty.component';
import { LoginComponent } from './login/login.component';
import { NzButtonModule, NzCheckboxModule, NzFormModule, NzIconModule, NzInputModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserOutline, LockOutline, EyeOutline, EyeInvisibleOutline, GithubOutline } from '@ant-design/icons-angular/icons';


@NgModule({
  declarations: [
    EmptyComponent, 
    LoginComponent,
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
    EmptyComponent,
    LoginComponent,
  ]
})
export class PagesModule { }
