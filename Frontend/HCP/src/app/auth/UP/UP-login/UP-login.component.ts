import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-UP-login',
  templateUrl: './UP-login.component.html',
  styleUrls: ['./UP-login.component.css']
})
export class UPLoginComponent implements OnInit {
  form: FormGroup;
  constructor(private router: Router,
    private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        cuil: new FormControl('', [Validators.required, Validators.minLength(10)]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
      })
  }
  get cuil() { return this.form.get("cuil"); }
  get password() { return this.form.get("password"); }
  ngOnInit() {
  }

  public iniciarSesion(event: Event) {
    event.preventDefault;

    if (this.form.valid) {

      this.router.navigate(["home-up"]);

    }
  }

}
