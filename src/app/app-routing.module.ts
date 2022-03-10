import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePokedexPageComponent } from './pages/create-pokedex-page/create-pokedex-page.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';

const routes: Routes = [
  {path: "pokedex", component: PokedexPageComponent},
  {path:"Create", component: CreatePokedexPageComponent},
  { path: "", component:PokedexPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
