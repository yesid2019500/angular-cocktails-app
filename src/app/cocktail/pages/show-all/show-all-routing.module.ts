import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCocktailComponent } from '../all-cocktail/all-cocktail.component';

const routes: Routes = [
  {
    path: '',
    component: AllCocktailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllCocktailRoutingModule {}
