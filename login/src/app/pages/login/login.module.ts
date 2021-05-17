import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NzIconModule, NzInputModule, NzCheckboxModule, NzButtonModule, NzFormModule } from "ng-zorro-antd";
import { ShareModule } from "src/app/share/share.module";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { UserOutline, LockOutline, EyeOutline, EyeInvisibleOutline, GithubOutline } from '@ant-design/icons-angular/icons';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ShareModule,
    LoginRoutingModule,
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
  ],
})
export class LoginModule { }