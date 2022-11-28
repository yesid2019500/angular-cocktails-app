import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCocktailComponent } from './pages/all-cocktail/all-cocktail.component';
import { FormsModule } from '@angular/forms';

import { VodkaComponent } from './pages/vodka/vodka.component';
import { CategoryComponent } from './pages/category/category.component';
import { ShowAllComponent } from './pages/show-all/show-all.component';
import { RouterModule } from '@angular/router';
import { CocktailTableComponent } from './components/cocktail-table/cocktail-table.component';
import { CocktailInputComponent } from './components/cocktail-input/cocktail-input.component';
import { AllCocktailRoutingModule } from './pages/show-all/show-all-routing.module';

@NgModule({
  declarations: [
    AllCocktailComponent,
    VodkaComponent,
    CategoryComponent,
    ShowAllComponent,
    CocktailTableComponent,
    CocktailInputComponent,
  ],
  exports: [
    AllCocktailComponent,
    VodkaComponent,
    CategoryComponent,
    ShowAllComponent,
    AllCocktailRoutingModule,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class CocktailModule {}
