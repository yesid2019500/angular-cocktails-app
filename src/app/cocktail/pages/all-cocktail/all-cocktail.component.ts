import { Component } from '@angular/core';

import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-all-cocktail',
  templateUrl: './all-cocktail.component.html',
  styleUrls: ['./all-cocktail.component.css'],
})
export class AllCocktailComponent {
  terms: string = '';
  thereError: boolean = false;
  cocktails: any = [];
  cocktailsSuggestion: any = [];
  showSuggest: boolean = false;

  constructor(private cocktailService: CocktailService) {}

  search(term: string) {
    // console.log(this.terms);
    this.thereError = false;
    this.terms = term;
    this.cocktailService.searchCocktail(term).subscribe((cocktails) => {
      // console.log(cocktails);
      this.cocktails = cocktails;
      if (cocktails.drinks === null) {
        this.thereError = true;
      }
    });
  }

  suggestion(term: string) {
    this.thereError = false;
    this.terms = term;
    this.showSuggest = true;
    // create suggestion
    this.cocktailService.searchCocktail(term).subscribe(
      (cocktails) => {
        this.cocktailsSuggestion = cocktails;
      },
      (err) => {
        this.cocktailsSuggestion = [];
      }
    );
  }

  searchSuggest(term: string) {
    this.search(term);
  }
}
