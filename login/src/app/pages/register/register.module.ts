import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ShareModule } from 'src/app/share/share.module';
import { RegisterRoutingModule } from './register-routing.module';
import { ServicesModule } from 'src/app/services/services.module';
import { NzButtonModule, NzCheckboxModule, NzFormModule, NzIconModule, NzInputModule, NzMessageModule, NzSelectModule } from 'ng-zorro-antd';
import { GithubOutline } from '@ant-design/icons-angular/icons';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    ShareModule,
    RegisterRoutingModule,
    CommonModule,
    ServicesModule,
    NzIconModule.forChild([
      GithubOutline,
    ]),
    NzCheckboxModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzMessageModule,
  ]
})
export class RegisterModule { }
