import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubService } from '../../shared-service/github.service';
import { User } from '../../user';
import { Repo } from '../../repo';

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.css']
})
export class UsuarioCardComponent implements OnInit {

  @Input() usuarioLocalizado: User;
  @Output() repositorios = new EventEmitter();
  repos: Repo[];

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
  }

  localizarRepositorios() {
    this._githubService.getRepos(this.usuarioLocalizado.login).subscribe((repos) => {
      this.repos = repos;
      this.repositorios.emit(this.repos);
    }, (error) => {
      console.error(error);
    });
  }

}
