import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  exports: [ ]
})

export class AppModule { }
