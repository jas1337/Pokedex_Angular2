import { TestBed, async, inject, tick } from '@angular/core/testing';

import { MockBackend, MockConnection } from '@angular/http/testing';


import { Response, ResponseOptions, Http, ConnectionBackend, BaseRequestOptions, RequestOptions } from '@angular/http';



import { RouterModule } from '@angular/router';
import { MOCK_POKEMONS } from './mock-pokemons';

import { PokemonService } from './pokemon.service';
import { Pokemon } from '../model/pokemon';





describe('Service: PokemonService', () => {

    beforeEach((() => {
        TestBed.configureTestingModule({
            providers: [
                PokemonService,
                MockBackend,
                BaseRequestOptions,
                ConnectionBackend,
                {
                    provide: Http,
                    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions],
                },
            ]
        });

    }));



    it('should create a service', inject([PokemonService], (service: PokemonService) => {
        expect(service).toBeTruthy();
    }));

    it('should return Pokemon', inject([PokemonService, MockBackend], (service: PokemonService, backend: MockBackend) => {

    return service.getPokemon4Testing(1).then(data => {
        this.pokemon = data;
        expect(this.pokemon.name).toEqual("SANDSHREW");
        expect(this.pokemon.hp).toEqual(50);
    });

    // return service.getPokemon4Testing2().subscribe(data => {
    //         this.pokemon = data;
    //         expect(this.pokemon.data.name).toEqual("SANDSHREW2");
    //       },
    //       (error:any) => console.log("Error: ", error),
    //       () => {
    //       expect(this.pokemon.hp).toEqual(510);
    //       });




    }));


});