import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NzIconModule, NzInputModule, NzCheckboxModule, NzButtonModule, NzFormModule, NzMessageModule } from "ng-zorro-antd";
import { ShareModule } from "src/app/share/share.module";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { UserOutline, LockOutline, EyeOutline, EyeInvisibleOutline, GithubOutline } from '@ant-design/icons-angular/icons';
import { ServicesModule } from "src/app/services/services.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ShareModule,
    LoginRoutingModule,
    CommonModule,
    ServicesModule,
    NzIconModule.forChild([
      UserOutline, LockOutline,
      EyeOutline, EyeInvisibleOutline,
      GithubOutline
    ]),
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    NzFormModule,
    NzMessageModule,
  ],
})
export class LoginModule { }