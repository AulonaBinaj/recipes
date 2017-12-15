import { Component, Input } from '@angular/core';

import { Recipe } from './recipe';
// import { routing } from '/recipe-book/src/app/app.routes';
// import { RE_ROUTES } from '../recipes.router';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html'
})

export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() recipeId: number;
}
