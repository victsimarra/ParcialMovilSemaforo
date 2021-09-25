import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import validator from 'validator';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private NC: NavController) { }

  loginForm = new FormGroup({
    userEmail: new FormControl(''),
    userPassword: new FormControl(''),
});

loginFormValidator = {
  userEmail: {
    empty:'',email:'',
},
  usePassword: {empty:'',
}
};

  ngOnInit() {
  }

  formValidator(): boolean{
    if(validator.isEmpty(this.loginForm.value.userEmail)){
      this.loginFormValidator.userEmail.empty="La Dirrecion De Correo Es Necesaria";
      return false;
    }else{
      this.loginFormValidator.userEmail.empty='';
    }
      if(!validator.isEmail(this.loginForm.value.userEmail)){
        this.loginFormValidator.userEmail.email="Ingrese Un Correo Valido";
        return false;
      }else{
        this.loginFormValidator.userEmail.email='';
      }
   
    if(validator.isEmpty(this.loginForm.value.userPassword)){
      this.loginFormValidator.usePassword.empty="La Contraseña Es Requerida";
      return false;
    }else{
      this.loginFormValidator.usePassword.empty='';
    }
    return true;
  }

  onSubmit(){
    if(this.formValidator()){
      let email = this.loginForm.value.userEmail;
      this.NC.navigateForward('/home/'+email);
      console.log("El Formulario fue Validado");
    }
  }

}
