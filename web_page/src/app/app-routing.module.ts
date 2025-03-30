import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
