import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router){

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }
  register(){
    this.router.navigate(['/','register']);
  }
}
