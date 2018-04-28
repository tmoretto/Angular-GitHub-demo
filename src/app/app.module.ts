import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GithubService } from './shared-service/github.service';
import { ListuserComponent } from './components/listuser/listuser.component';
import { ListrepoComponent } from './components/listrepo/listrepo.component';
import { FinduserComponent } from './components/finduser/finduser.component';

const appRoutes:Routes=[
  { path: 'finduser', component:FinduserComponent },
  { path: 'user', component:ListuserComponent },
  { path: 'repos', component:ListrepoComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    ListrepoComponent,
    FinduserComponent
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
