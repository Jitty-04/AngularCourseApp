import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const myRouter:Routes=[
  {
    path:"",
    component:AddCourseComponent
  },
  {
    path:"view",
    component:ViewCourseComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    ViewCourseComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
