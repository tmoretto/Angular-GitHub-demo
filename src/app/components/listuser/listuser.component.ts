import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared-service/user.service';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  private user:User;

  constructor(private _userService:UserService, private _router:Router) { }

  ngOnInit() {
    this.findUser('tmoretto');
  }

  findUser(login:string) {
    this._userService.getUser(login).subscribe((user) => {
      this.user = user;
    },(error)=>{ 
      console.error(error);
    });
  }

}
