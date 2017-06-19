import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Pokemon } from '../model/pokemon';
import { EvolutionChain } from '../model/evolution-chain';
import { EvolutionChainUrl } from '../model/evolution-chain-url';

import { MOCK_POKEMONS } from './mock-pokemons';


@Injectable()
export class PokemonService {


  private baseUrl: string = 'http://pokeapi.co/api/v2';
  url:string;

  constructor(private http: Http) { }


 getPokemon(id: number) {
    return  this.http.get(`${this.baseUrl}/pokemon/${id}/`).map((response) => 
    {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return this.logError(response);
                    }
                })    
      .map(data => new Pokemon(data.id, data.name, data.sprites.front_default,data.stats[5].base_stat,data.stats[4].base_stat,data.stats[3].base_stat,data.stats[0].base_stat)
    );
  }

 getPokemon4Testing2() {
    return  this.http.get("api/pokemons4Test").map((response) => 
    {
                    if (response.ok) {
                        return response.json().data;
                    } else {
                        return this.logError(response);
                    }
                });
  }

   getPokemon4Testing(id: number) {
    return Promise.resolve(MOCK_POKEMONS[id]);
  }

 getEvolutionChain1(id: number) {
 return  this.http.get(`${this.baseUrl}/evolution-chain/${id}/`).map(response => response.json())
      .map(data => new EvolutionChain(data.chain.species.name,(data.chain.species.url).replace("http://pokeapi.co/api/v2/pokemon-species/","").replace("/","")
    ));
  }

getEvolutionChain2(id: number) {
 return  this.http.get(`${this.baseUrl}/evolution-chain/${id}/`).map(response => response.json())
      .map(data => new EvolutionChain(data.chain.evolves_to[0].species.name,(data.chain.evolves_to[0].species.url).replace("http://pokeapi.co/api/v2/pokemon-species/","").replace("/",""),
    ));
  }

  getEvolutionChain3(id: number) {
 return  this.http.get(`${this.baseUrl}/evolution-chain/${id}/`).map(response => response.json())
      .map(data => new EvolutionChain(data.chain.evolves_to[0].evolves_to[0].species.name,(data.chain.evolves_to[0].evolves_to[0].species.url).replace("http://pokeapi.co/api/v2/pokemon-species/","").replace("/","")
    ));
  }

 getEvolutionChainUrl(id: number) {

 return  this.http.get(`${this.baseUrl}/pokemon-species/${id}/`).map(response => response.json())
      .map(data => new EvolutionChainUrl ((data.evolution_chain.url).replace("http://pokeapi.co/api/v2/evolution-chain/","").replace("/",""))
      );
  }


   private logError(error: any) {
        try {
            error = error.json();
            console.error(error.error);
        } catch(e) {
          
            console.error(error);
        }

        return Observable.throw(error);
    }
}
