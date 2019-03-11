import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SupportComponent } from './support/support.component';
import { ProfileComponent } from './profile/profile.component';
import { MassgeComponent } from './massge/massge.component';
import { DesireComponent } from './desire/desire.component';
import { NavsideComponent } from './navside/navside.component';
import { Desir2Component } from './desir2/desir2.component';
import { GeneralinfoComponent } from './generalinfo/generalinfo.component';
import { PreviousExComponent } from './previous-ex/previous-ex.component';
import { EducationalComponent } from './educational/educational.component';
import { CoursesComponent } from './courses/courses.component';
import { LanguagesComponent } from './languages/languages.component';
import { CvComponent } from './cv/cv.component';
import { PasswordsetComponent } from './passwordset/passwordset.component';
import { ChoseCountryComponent } from './chose-country/chose-country.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';

const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'home', component:  HomeComponent},
  {path: 'support' , component: SupportComponent},
  {path:'profile' , component: ProfileComponent},
  {path:'massge' , component: MassgeComponent},
  {path:'desir' , component: DesireComponent  ,   
  children:[
    {path:'' , component: Desir2Component},
    {path:'desire2' , component: Desir2Component},
    {path: 'general' , component:GeneralinfoComponent},
    {path: 'previoues' , component:PreviousExComponent},
    {path: 'education' , component:EducationalComponent},
    {path: 'courses' , component:CoursesComponent},
    {path: 'lang' , component:LanguagesComponent},
    {path: 'cv' , component:CvComponent},
    {path: 'password' , component:PasswordsetComponent}
  ]},
  {path:'country' , component: ChoseCountryComponent},
  {path:'signup' , component: SignupComponent},
  {path:'signin' , component: SigninComponent},
  {path:'fpassowrd' , component: ForgetpassComponent},
  {path:'**' , component: HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SupportComponent,
    ProfileComponent,
    MassgeComponent,
    DesireComponent,
    NavsideComponent,
    Desir2Component,
    GeneralinfoComponent,
    PreviousExComponent,
    EducationalComponent,
    CoursesComponent,
    LanguagesComponent,
    CvComponent,
    PasswordsetComponent,
    ChoseCountryComponent,
    SignupComponent,
    SigninComponent,
    ForgetpassComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
