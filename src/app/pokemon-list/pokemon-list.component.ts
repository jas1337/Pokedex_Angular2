import { Component, OnInit, Input, Output, } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { PokemonService } from '../shared/pokemon.service';


@Component({
  selector: 'pokemon-list-app',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
 
})
export class PokemonListComponent implements OnInit {

  pokemonList: Pokemon[] = [];
  pokemon: Pokemon ;
  count: number = 721;
  offset: number = 1;
  limit: number = 5;
  id: number = 1;
  page: number;
  isLoading: boolean = false;

  constructor(

    private pokemonService: PokemonService) { }

  ngOnInit() {

    this.getPokemons();

// return this.pokemonService.getPokemon4Testing2().subscribe(data => {
//         this.pokemon = data;
//       },
//       (error:any) => console.log("Error: ", error),
//       () => {
      
//       console.log(this.pokemon.data.id);
//       });

  }

  paginationNextPage() {
    this.pokemonList = [];
    if (!this.isLoading) {
      if ((this.offset) >= this.count) {
        this.offset = this.count;
        this.getPokemons();
      }
      else {
        this.offset = this.offset + this.limit;
        this.getPokemons();
      }
      
    }
  }

  paginationPreviousPage() {
    this.pokemonList = [];
    if (!this.isLoading) {
      if ((this.offset) <= this.limit) {
        this.offset = 1;
        this.getPokemons();
      }
      else {
        this.offset = this.offset - this.limit;
        this.getPokemons();
      }
      
    }
  }

  getPokemons() {
    this.isLoading = true;
    for (let i = this.offset; i < (this.offset + this.limit); i++) {
      this.getPokemon(i)
      this.page = Math.floor(this.offset / this.limit) + 1;
    }
  }

  getPokemon(id: number) {
    this.pokemonService.getPokemon(id)
      .subscribe(data => {
        this.pokemon = data;
      },
      
      error => console.log("Error: ", error),
      () => {
        this.pokemonList.push(this.pokemon);
        if (this.pokemonList.length == this.limit) {
          this.isLoading = false;
        }
      
      });
  }


}
