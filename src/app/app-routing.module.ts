import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecommendsComponent } from './components/recommends/recommends.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HelpComponent } from './components/help/help.component';
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' } ,
  { path: 'landing', component: LandingComponent, title: 'M-Store | Home' },
  { path: 'login', component: LoginComponent, title: 'M-Store | Login' },
  { path: 'register', component: RegisterComponent, title: 'M-Store | Register' },
  { path: 'recommends', component: RecommendsComponent, title: 'M-Store | Recommends' },
  { path: 'about', component: AboutComponent, title: 'M-Store | About Us' },
  { path: 'contact', component: ContactComponent, title: 'M-Store | Contact Us' },
  { path: 'help', component: HelpComponent, title: 'M-Store | Help Me' },
  { path: 'faq', component: FaqComponent, title: 'M-Store | FAQ' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
