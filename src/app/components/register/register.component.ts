import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });
  user?: User;
  constructor(private router: Router, private userService:UserService){

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    let postData = {username : this.profileForm.value.username,email : this.profileForm.value.email ,password :this.profileForm.value.password};
    var resonse = this.userService.create(postData).subscribe(rs => console.log(rs));
  }
  register(){
    this.router.navigate(['/','register']);
  }
}
