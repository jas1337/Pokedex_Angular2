import { Component, OnInit, Input, Output, } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { PokemonService } from '../shared/pokemon.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { EvolutionChain } from '../model/evolution-chain';
import { EvolutionChainUrl } from '../model/evolution-chain-url';


@Component({
    selector: 'pokemon-detail-app',
    templateUrl: './pokemon-detail.component.html',
    styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {

    pokemon: Pokemon;
    evolutionChain: EvolutionChain;
    evolutionChainList: EvolutionChain[] = [];
    count: number = 365;
    evolutionChainUrl: EvolutionChainUrl;

    constructor(private pokemonService: PokemonService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {

        this.route.params
            .switchMap((params: Params) => this.pokemonService.getPokemon(+params['id']))
            .subscribe(data => this.pokemon = data);

        this.route.params
            .switchMap((params: Params) => this.pokemonService.getEvolutionChainUrl(+params['id']))
            .subscribe(data => {
            this.evolutionChainUrl = data
                this.getEvolutionChain(parseInt(this.evolutionChainUrl.url));

            });

    }




    getEvolutionChain(id: number) {

        this.pokemonService.getEvolutionChain(id)
            .subscribe(data => {
                this.evolutionChain = data;
            },
            error => console.log("Error: ", error),
            () => {

            });
    }


    getEvolutionChainUrl(id: number) {

        this.pokemonService.getEvolutionChainUrl(id)
            .subscribe(data => {
                this.evolutionChainUrl = data;
            },
            error => console.log("Error: ", error),
            () => {
            });
    }
}