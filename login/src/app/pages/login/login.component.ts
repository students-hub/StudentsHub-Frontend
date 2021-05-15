import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  formModel: FormGroup;
  isRemember: AbstractControl;
  passwordVisible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formModel = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      isRemember: false,
    })
    this.isRemember = this.formModel.controls["isRemember"];
  }

  ngOnInit(): void {}

  onCheckRemember(): void {
    console.log(this.isRemember.value);
  }

  onSubmit(): void {
    console.log(this.formModel.value);
    this.router.navigate(['/vue']);
  }

}
