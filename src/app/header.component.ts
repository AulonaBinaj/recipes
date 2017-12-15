import { Component } from '@angular/core';
import { routing } from './app.routes';
import { DropdownDirective } from './dropdown.directive';
import { RecipeService } from 'app/recipes/recipe.service';
import { Http } from '@angular/http';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private rs: RecipeService) { }
  onStore() {
    this.rs.storeData()
      .subscribe(
      data => console.log(data),
      error => console.error(error)
      )
  }
  onFetch() {
    this.rs.fetchData();

  }
}
