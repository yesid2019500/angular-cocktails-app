import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
// import { Cocktails } from '../../interfaces/cocktail.interfaces';

@Component({
  selector: 'app-vodka',
  templateUrl: './vodka.component.html',
  styleUrls: ['./vodka.component.css'],
})
export class VodkaComponent implements OnInit {
  cocktailArr: string[] = [
    'vodka',
    'Margarita',
    'blue',
    'tommy',
    'tequila',
    'whiskey',
  ];
  cocktailActive: string = '';
  cocktails: any = [];
  thereError: boolean = false;

  constructor(private cocktailService: CocktailService) {}

  getClassCSS(term: string): string {
    return term === this.cocktailActive ? 'btn change ' : 'btn btn-warning';
  }

  activateCocktails(term: string) {
    if (term === this.cocktailActive) {
      return;
    }

    this.thereError = false;
    this.cocktailActive = term;
    this.cocktails = [];
    this.cocktailService.searchCocktail(term).subscribe((cocktail) => {
      console.log(cocktail.drinks);
      this.cocktails = cocktail;
      if (cocktail.drinks === null) {
        this.thereError = true;
      }
    });
  }

  ngOnInit(): void {}
}
