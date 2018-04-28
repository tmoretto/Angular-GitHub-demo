import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../shared-service/github.service';
import { Repo } from '../../repo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listrepo',
  templateUrl: './listrepo.component.html',
  styleUrls: ['./listrepo.component.css']
})
export class ListrepoComponent implements OnInit {

  private repos:Repo[];

  constructor(private _githubService:GithubService, private _router:Router) { }

  ngOnInit() {
    this._githubService.getRepos('tmoretto').subscribe((repos) => {
      this.repos = repos;
    },(error)=>{ 
      console.error(error);
    });
  }

}
