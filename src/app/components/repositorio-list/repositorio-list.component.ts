import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../../repo';

@Component({
  selector: 'app-repositorio-list',
  templateUrl: './repositorio-list.component.html',
  styleUrls: ['./repositorio-list.component.css']
})
export class RepositorioListComponent implements OnInit {

  @Input() repositorios: Repo[];

  constructor() { }

  ngOnInit() {
  }

  sortByStar() {
    this.repositorios = this.repositorios.sort((repo1, repo2) => {
        return (repo1.stargazers_count - repo2.stargazers_count);
    }).reverse();
  }

  sortByName() {
    this.repositorios = this.repositorios.sort((repo1, repo2) => {
      if (repo1.name.toLowerCase() > repo2.name.toLowerCase()) {
          return 1;
      }
      if (repo1.name.toLowerCase() < repo2.name.toLowerCase()) {
          return -1;
      }
      return 0;
    });
  }
}
