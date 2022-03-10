import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CreatePokedexPageComponent } from './pages/create-pokedex-page/create-pokedex-page.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './component/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './component/pokemon-list/pokemon-list.component';



@NgModule({
  declarations: [
    AppComponent,
    CreatePokedexPageComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokedexPageComponent

  

 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
