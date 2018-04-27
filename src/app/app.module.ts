import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserService } from './shared-service/user.service';
import { ListrepoComponent } from './components/listrepo/listrepo.component';
import { RepoService } from './shared-service/repo.service';

const appRoutes:Routes=[
  { path: 'user', component:ListuserComponent },
  { path: 'repos', component:ListrepoComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    ListrepoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService, 
    RepoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
