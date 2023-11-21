import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
username:string='';
password: string='';
message:string='';

perform_login(){
  if(this.username=='admin' && this.password=='admin'){
    this.message='login success';

  }
  else{
    this.message='login failed';

  }

}
}
