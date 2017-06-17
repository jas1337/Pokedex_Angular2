import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: PokemonListComponent },
    { path: 'pokemon-detail/:id', component: PokemonDetailComponent },
  

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
