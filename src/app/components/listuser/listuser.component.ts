import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../shared-service/github.service';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  private user:User;

  constructor(private _githubService:GithubService, private _router:Router) { }

  ngOnInit() {
    this.findUser('tmoretto');
  }

  findUser(login:string) {
    this._githubService.getUser(login).subscribe((user) => {
      this.user = user;
    },(error)=>{ 
      console.error(error);
    });
  }

}
