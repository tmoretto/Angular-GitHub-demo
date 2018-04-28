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
    this._githubService.getRepos('otaviojava').subscribe((repos) => {
      this.repos = repos;
    },(error)=>{ 
      console.error(error);
    });
  }

  sortByStar() {
    this.repos = this.repos.sort((repo1, repo2) => {
        return (repo1.stargazers_count - repo2.stargazers_count);
    }).reverse();
  }
  
  sortByName() {
    this.repos = this.repos.sort((repo1, repo2) => {
      if (repo1.name > repo2.name) {
          return 1;
      }
      if (repo1.name < repo2.name) {
          return -1;
      }
      return 0;
    });
  }

}
