import { Injectable } from '@angular/core';
import { POKEMONS } from '../model/pokemon-mock';
import { Pokemon } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  listPokemons: Pokemon[] = new Array<Pokemon>();

  constructor() {
   

    
   }
 
