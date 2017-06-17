
export class Pokemon {
   id: number;
    name: string;
    sprite: string;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    
    constructor(id: number, name: string, sprite: string,hp: number, attack: number, defense: number, speed: number) {
        this.id = id;
        this.name = name;
        this.sprite = sprite;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
    }

}