import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 16 Crud example';
  userName:string | null | undefined
  constructor(private userService:UserService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(localStorage.getItem("userId") != null){
      var userPost = {userId:localStorage.getItem("userId")}
      console.log(localStorage.getItem("userId"));
      var userid = this.userService.getbyuser(userPost).subscribe(rs =>{
        console.log(localStorage.getItem("userId"))
        if(rs != null){
          this.userName = rs["username"];
        }
        
      });
      
    }
    else{
      this.userName = "";
    }
  }
}
