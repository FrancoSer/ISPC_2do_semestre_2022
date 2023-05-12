import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-UM-login',
  templateUrl: './UM-login.component.html',
  styleUrls: ['./UM-login.component.css']
})
export class UMLoginComponent implements OnInit {

  
  form: FormGroup;
  
  constructor(private router:Router,
    private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        matricula: new FormControl ('', [Validators.required, Validators.minLength(10)]),
        contraseña: new FormControl('', [Validators.required, Validators.minLength(8)])
      })
  }
  get matricula() { return this.form.get("matricula"); }
  get password() { return this.form.get("contraseña"); }

  ngOnInit() {

  }

  public iniciarSesion(event: Event) {
    event.preventDefault;

    if (this.form.valid) {
      //Aqui debería hacer las validaciones de usuario y contraseña
      console.log("Matricula: " + this.matricula + " - Password: " + this.password);
      this.router.navigate(["users/home-um"]);
     
    }
  }


}
