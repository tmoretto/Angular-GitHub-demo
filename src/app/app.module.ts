import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListuserComponent } from './components/listuser/listuser.component';

const appRoutes:Routes=[
  { path: '', component:ListuserComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
