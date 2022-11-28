import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktails } from '../interfaces/cocktail.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktail: any[] = [];

  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
  private api = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
  private apiIngredent =
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

  constructor(private http: HttpClient) {}

  searchCocktail(terms: string): Observable<Cocktails> {
    const url = `${this.apiUrl}s=${terms}`;
    return this.http.get<Cocktails>(url);
  }

  searchByIngredients(terms: string): Observable<any> {
    const url = `${this.apiIngredent}${terms}`;
    // console.log(url);

    return this.http.get<any>(url);
  }

  getCocktalByParams(id: string): Observable<Cocktails> {
    const url = `${this.api}${id}`;
    return this.http.get<Cocktails>(url);
  }
}
