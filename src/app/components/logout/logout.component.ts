import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  logout(){
    if(localStorage.getItem("userId")){
      localStorage.setItem("userId", "0");
    }
  }
}
