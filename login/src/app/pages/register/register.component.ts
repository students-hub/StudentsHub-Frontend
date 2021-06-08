import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { RegisterParam, RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  formModel: FormGroup;
  passwordVisible: boolean = false;
  passwordConfirmVisible: boolean = false;

  constructor(
    private zone: NgZone,
    private router: Router,
    private fb: FormBuilder,
    private message: NzMessageService,
    private registerService: RegisterService
  ) {
    this.formModel = this.fb.group({
      user_name: ['', [Validators.required]],
      role: [1, [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      agree: [false, [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.formModel.value.agree) {
      this.message.error('请认真阅读协议并勾选相关选项!')
    }

    if (this.formModel.value.password === this.formModel.value.confirmPassword) {
      const param: RegisterParam = {
        user_name: this.formModel.value.user_name,
        password: this.formModel.value.password,
        role: this.formModel.value.role,
      }
      this.registerService.register(param).subscribe(res => {
        if (res.hasOwnProperty('user_id')) {
          this.message.info('注册成功!');
          setTimeout(() => {
            this.zone.run(() => this.router.navigateByUrl('/vue'));
          }, 1000)
        } else {
          this.message.error('已有重复的用户存在!');
        }
      });
    } else {
      this.message.error('两次输入的密码不一致,请重新输入!');
    }
  }

}
