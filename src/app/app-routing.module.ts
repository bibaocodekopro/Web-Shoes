import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginAdminComponent } from './components/admin/login-admin/login-admin.component';
import { HomePageAdminComponent } from './components/admin/home-page-admin/home-page-admin.component';
import { UserComponent } from './components/admin/user/user.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'admin/login', component: LoginAdminComponent },
  { path: 'admin', component: HomePageAdminComponent },
  { path: 'admin/user', component: UserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
