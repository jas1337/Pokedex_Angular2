import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1><a id="home" routerLink="/home" routerLinkActive="active">Pokedex</a></h1>
              <router-outlet></router-outlet>`,


})
export class AppComponent  { name = 'Angular'; }
