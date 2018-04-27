import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserService } from './shared-service/user.service';
import { ListrepoComponent } from './components/listrepo/listrepo.component';

const appRoutes:Routes=[
  { path: '', component:ListuserComponent }
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
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
