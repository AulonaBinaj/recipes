import { Recipe } from './recipe-list/recipe';
import { Http, Headers,Response } from '@angular/http';
import { Ingredient } from '../shared/ingredient';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { EventEmitter } from '@angular/core';

@Injectable()
export class RecipeService {
  recipesChange = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [
    // new Recipe('Artikull1', 'Pershkrim Artikull1', 'http://opm1pr.com/wp-content/uploads/2016/04/Google-Maps-Icon-100-x-100-px-.png', [
    //   new Ingredient ('Emri', 2),
    //   new Ingredient ('Emri 1', 3)
    // ]),
    // new Recipe('Artikull2', 'Pershkrim Artikull2', 'http://opm1pr.com/wp-content/uploads/2016/04/Google-Maps-Icon-100-x-100-px-.png', [])
  ];

  constructor(private http: Http) { }
  getRecipes() {
    return this.recipes;
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-708dd.firebaseio.com/recipes.json', body, { headers: headers });
  }
  fetchData() {
    return this.http.get('https://recipebook-708dd.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
      (da: Recipe[]) => {
       this.recipes = da;
       this.recipesChange.emit(this.recipes);
     }
    );
  }
}


