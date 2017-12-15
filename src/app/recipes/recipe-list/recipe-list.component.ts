import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'


})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  // [
  //   new Recipe('Artikull1', 'Pershkrim Artikull1', 'http://opm1pr.com/wp-content/uploads/2016/04/Google-Maps-Icon-100-x-100-px-.png', []),
  //   new Recipe('Artikull2', 'Pershkrim Artikull2', 'http://opm1pr.com/wp-content/uploads/2016/04/Google-Maps-Icon-100-x-100-px-.png', []),
  //   new Recipe('Artikull3', 'Pershkrim Artikull3', 'http://opm1pr.com/wp-content/uploads/2016/04/Google-Maps-Icon-100-x-100-px-.png', [])
  // ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  //   Do te perdorim nje cikel *ngFor per te shfaqur me shume se nje artikull
  //   recipet = new Recipe('Dummy', 'Dummy', 'http://opm1pr.com/wp-content/uploads/2016/04/Google-Maps-Icon-100-x-100-px-.png');
  constructor(private recipeService: RecipeService) { }

  //   thirret cdo  here metoda oninit kur komponenti i dhene eshte inicializuar
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipesChange.subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
    );
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);

  }

}
