import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService, LoginParam } from 'src/app/services/login.service';
import { NzMessageService } from 'ng-zorro-antd';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  formModel: FormGroup;
  isRemember: AbstractControl;
  isLoginFailed: boolean = false;
  passwordVisible: boolean = false;

  constructor(
    private zone: NgZone,
    private router: Router,
    private fb: FormBuilder,
    private message: NzMessageService,
    private loginService: LoginService,
    private localStorageService: LocalStorageService,
  ) {
    let persistentUsername: string = this.localStorageService.get('user_name');
    let persistentPassword: string = this.localStorageService.get('password');
    let persistentRemember: boolean = !!this.localStorageService.get('is_remember');
    
    this.formModel = this.fb.group({
      username: [persistentUsername, [Validators.required]],
      password: [persistentPassword, [Validators.required]],
      isRemember: persistentRemember,
    })
    this.isRemember = this.formModel.controls["isRemember"];
  }

  onCheckRemember(): void {
    if (this.isRemember.value) {
      this.localStorageService.set('user_name', this.formModel.value.username);
      this.localStorageService.set('password', this.formModel.value.password);
      this.localStorageService.set('is_remember', true);
    } else {
      this.localStorageService.remove('user_name');
      this.localStorageService.remove('password');
      this.localStorageService.set('is_remember', false);
    }
  }

  onSubmit(): void {
    let param: LoginParam = {
      user_name: this.formModel.value.username,
      password: this.formModel.value.password,
    }
    this.loginService.login(param).subscribe(res => {
      if (res.hasOwnProperty('info')) {
        this.zone.run(() => this.router.navigateByUrl('/vue'));
      } else {
        this.message.error('用户名/密码错误！请重新输入');
      }
    });
  }
}
