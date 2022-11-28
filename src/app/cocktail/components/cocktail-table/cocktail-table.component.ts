import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cocktail-table',
  templateUrl: './cocktail-table.component.html',
  styleUrls: ['./cocktail-table.component.css'],
})
export class CocktailTableComponent implements OnInit {
  // cotails to get data
  @Input() cocktails: any = [];

  constructor() {}

  ngOnInit(): void {}
}
