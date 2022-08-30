import { PokeCardModule } from '../pages/poke-card/poke-card.module';
import { SharedModule } from './../shared/shared.module';
import { RoutingModule } from './routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    PokeCardModule
  ]
})
export class PagesModule { }
