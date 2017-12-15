import { Ingredient } from '/recipe-book/src/app/shared/ingredient';

export class Recipe {
    constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[]) {}
  }