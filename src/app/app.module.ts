import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Year2023Component } from './year-2023/year-2023.component';
import { Year2024Component } from './year-2024/year-2024.component';
import { Year2025Component } from './year-2025/year-2025.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Year2023Component,
    Year2024Component,
    Year2025Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
