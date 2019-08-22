import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserNameComponent } from './user-name/user-name.component';
import { ListUserService } from './list-user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ListUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
