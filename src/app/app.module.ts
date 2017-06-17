import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from './shared/pokemon.service';


@NgModule({
  imports: [BrowserModule, HttpModule,FormsModule,AppRoutingModule],
  declarations: [AppComponent, PokemonListComponent,PokemonDetailComponent],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
