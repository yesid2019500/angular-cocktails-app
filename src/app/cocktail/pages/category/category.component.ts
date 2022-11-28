import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  terms: string = '';
  thereError: boolean = false;
  cocktails: any = [];

  constructor(private cocktailService: CocktailService) {}

  search(term: string) {
    // console.log(this.terms);
    this.thereError = false;
    this.terms = term;
    this.cocktailService.searchByIngredients(term).subscribe((cocktails) => {
      console.log(cocktails.drinks);

      this.cocktails = cocktails;
      if (cocktails.drinks === null) {
        this.thereError = true;
      }
    });
  }
}
