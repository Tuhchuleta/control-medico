import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formGroupLogin: UntypedFormGroup;

  showPassword = false;

  spinner = false;

  message: string;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  invalidrequired(value: string) {
    return (
      this.formGroupLogin.get(value)?.invalid &&
      this.formGroupLogin.get(value)?.touched
    );
  }

  createForm() {
    this.formGroupLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.formGroupLogin.invalid) {
      return Object.values(this.formGroupLogin.controls).forEach((control) => {
        if (control instanceof UntypedFormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    }

    this.spinner = true;

    const { username, password } = this.formGroupLogin.value;

    this.loginService.login(username, password).subscribe({
      next: () => {
        this.spinner = false;
        this.router.navigateByUrl('/private/certificado');
      },
      error: (err) => {
        this.spinner = false;
        this.message = err.error.message;
      },
    });
  }
}
