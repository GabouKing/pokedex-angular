import { RouterModule } from '@angular/router';

import { ListPokemonComponent } from './../shared/list-pokemon/list-pokemon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ListPokemonComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ListPokemonComponent,HeaderComponent, FooterComponent]
})
export class SharedModule { }
