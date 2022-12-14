import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeCardModule } from './pages/poke-card/poke-card.module';

import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokeCardModule,
    PagesModule,
    HttpClientModule  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
