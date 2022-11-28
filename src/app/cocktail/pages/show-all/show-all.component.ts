import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cocktails } from '../../interfaces/cocktail.interfaces';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css'],
})
export class ShowAllComponent implements OnInit {
  // cocktail: any = [];
  cocktail!: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private cocktailService: CocktailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({ id }) => {
      this.cocktailService.getCocktalByParams(id).subscribe((item) => {
        this.cocktail = item.drinks[0];
        // console.log(strDrink);
      });
    });
  }
}
