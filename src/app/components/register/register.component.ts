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
    gender: new FormControl(''),
    age: new FormControl(''),
    occupation: new FormControl(''),
    zip_code: new FormControl('')
  });
  user?: User;
  constructor(private router: Router, private userService:UserService){

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    let postData = {occupazip_codetion : this.profileForm.value.zip_code,occupation : this.profileForm.value.occupation,age : this.profileForm.value.age,username : this.profileForm.value.username,gender : this.profileForm.value.gender ,password :this.profileForm.value.password};
    var resonse = this.userService.create(postData).subscribe(rs => {
      console.log(rs)
      alert(rs["message"]);
      
      this.router.navigate(['/','tutorials']);
    });
    
  }
  register(){
    this.router.navigate(['/','register']);
  }
}
