import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginAdminComponent } from './components/admin/login-admin/login-admin.component';
import { HomePageAdminComponent } from './components/admin/home-page-admin/home-page-admin.component';
import { HeaderAdminComponent } from './components/admin/header-admin/header-admin.component';
import { UserComponent } from './components/admin/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    RegisterPageComponent,
    LoginAdminComponent,
    HomePageAdminComponent,
    HeaderAdminComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
