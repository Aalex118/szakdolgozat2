import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AngularCropperjsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
