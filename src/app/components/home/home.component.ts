import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Repo } from '../../repo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  repos: Repo[];

  constructor() { }

  ngOnInit() {
  }

  aoLocalizarUsuario(usuarioLocalizado) {
    this.user = usuarioLocalizado;
    this.repos = null;
  }

  aoLocalizarRepositorios(repositorios) {
    this.repos = repositorios;
  }
}
