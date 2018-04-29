import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../../user';
import { GithubService } from '../../shared-service/github.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  user: User;
  @Output() usuarioLocalizado = new EventEmitter();

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
  }

  findUser(userLogin: string) {
    if (userLogin) {
      this._githubService.getUser(userLogin).subscribe((user) => {
        this.user = user;
        this.usuarioLocalizado.emit(this.user);
      }, (error) => {
        this.usuarioLocalizado.emit(null);
        console.error(error);
      });
    }
  }

  clearUser() {
    this.user = null;
    this.usuarioLocalizado.emit(null);
  }

}
