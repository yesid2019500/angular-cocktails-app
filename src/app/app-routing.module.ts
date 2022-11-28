import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCocktailComponent } from './cocktail/pages/all-cocktail/all-cocktail.component';
import { CategoryComponent } from './cocktail/pages/category/category.component';
import { ShowAllComponent } from './cocktail/pages/show-all/show-all.component';
import { VodkaComponent } from './cocktail/pages/vodka/vodka.component';

const routes: Routes = [
  {
    path: '',
    component: AllCocktailComponent,
    pathMatch: 'full',
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'vodka',
    component: VodkaComponent,
  },
  {
    path: 'cocktail/:id',
    component: ShowAllComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
