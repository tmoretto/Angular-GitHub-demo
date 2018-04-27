import { Component, OnInit } from '@angular/core';
import { RepoService } from '../../shared-service/repo.service';
import { Repo } from '../../repo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listrepo',
  templateUrl: './listrepo.component.html',
  styleUrls: ['./listrepo.component.css']
})
export class ListrepoComponent implements OnInit {

  private repos:Repo[];

  constructor(private _repoService:RepoService, private _router:Router) { }

  ngOnInit() {
    this._repoService.getRepos('tmoretto').subscribe((repos) => {
      this.repos = repos;
    },(error)=>{ 
      console.error(error);
    });
  }

}
