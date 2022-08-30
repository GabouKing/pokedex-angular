import { Observable, Subscription } from 'rxjs';
import { PokeApiService } from '../../service/poke-api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent implements OnInit {

  pokemon!: Observable<any>;
  public generateList: any;
  public getListPokemon: any;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.inicializaDados();
  }

  inicializaDados(): Subscription  {
    return this.pokeApiService.listPokemon.subscribe(
      (response) => {
        setTimeout(()=>{
        this.generateList = response.results;
        this.getListPokemon = this.generateList;
        },1500)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  findPokemon(pokeSearchName: string): void {
    this.getListPokemon = this.generateList.filter((response: any) => {
      return !response.name.indexOf(pokeSearchName.toLowerCase());
    });
  }
}
