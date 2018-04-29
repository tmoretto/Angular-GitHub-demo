import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { GithubService } from './shared-service/github.service';
import { UsuarioCardComponent } from './components/usuario-card/usuario-card.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { RepositorioListComponent } from './components/repositorio-list/repositorio-list.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsuarioCardComponent,
    UsuarioFormComponent,
    RepositorioListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
