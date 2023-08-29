import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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
  constructor(private router: Router, private userService: UserService){

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    var loginData = {username:this.profileForm.value.username, password: this.profileForm.value.password}
    var responese = this.userService.login(loginData).subscribe(rs =>{
        console.log(rs);
        if(rs){
          if(rs["result"] == true){
            localStorage.setItem("userId", rs["userId"])
            this.router.navigate(['/','tutorials']);
            alert(rs["message"]);
          }
          else{
            alert(rs["message"]);
          }
          
        }
        else{
          alert("error conection to server, please check again");
        }
    });
  }
  register(){
    this.router.navigate(['/','register']);
  }
}
