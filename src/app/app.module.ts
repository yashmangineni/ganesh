import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Year2023Component } from './year-2023/year-2023.component';
import { Year2024Component } from './year-2024/year-2024.component';
import { Year2025Component } from './year-2025/year-2025.component';
import { Year2026Component } from './year-2026/year-2026.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Year2023Component,
    Year2024Component,
    Year2025Component,
    Year2026Component,
    ContactComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    TermsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
