import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { ProfileComponent } from './components/Home/profile/profile.component';
import { SuggestionsComponent } from './components/Home/suggestions/suggestions.component';
import { OverviewComponent } from './components/Home/profileComponents/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ProfileComponent,
    SuggestionsComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
