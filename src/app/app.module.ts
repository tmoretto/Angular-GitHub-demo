import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GithubService } from './shared-service/github.service';
import { UsuarioCardComponent } from './components/usuario-card/usuario-card.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { RepositorioListComponent } from './components/repositorio-list/repositorio-list.component';

const appRoutes:Routes=[
]

@NgModule({
  declarations: [
    AppComponent,
    UsuarioCardComponent,
    UsuarioFormComponent,
    RepositorioListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
