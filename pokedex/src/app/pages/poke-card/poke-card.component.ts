import { environment } from './../../../environments/environment';
import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

const API = environment.apiNoLimit;
const APIPokemonName = environment.apiURLPokemonName;

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
})
export class PokeCardComponent implements OnInit {

  public pokemon: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.generatePokemon;
  }

  get generatePokemon(): any {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.getPokemon(`${API}/${id}`);
    const pokemonByNAme = this.pokeApiService.getPokemon(
      `${APIPokemonName}/${id}`
    );

    return forkJoin([pokemon, pokemonByNAme]).subscribe(
      (response) => {
        setTimeout(()=>{
          this.pokemon = response;
        },1000)
      },
      (error) => {
        console.log(error);
      }

    );
  }
}
()