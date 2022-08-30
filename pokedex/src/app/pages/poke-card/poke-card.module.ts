import { RouterModule } from '@angular/router';
import { PokeCardComponent } from './poke-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PokeCardComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[PokeCardComponent]
})
export class PokeCardModule { }
