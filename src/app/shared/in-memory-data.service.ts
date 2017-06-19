import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pokemons4Test = 
        {
        id: 19,
        name: "RATTATA",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/19.png",
        hp: 30,
        attack: 56,
        defense: 35,
        speed: 72,

    };  
    return {pokemons4Test};
  }
}
