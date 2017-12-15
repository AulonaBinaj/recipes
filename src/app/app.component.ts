import { Component } from '@angular/core';
import { routing } from './app.routes';
import { HeaderComponent } from './header.component';
import { RecipeService } from './recipes/recipe.service';


@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent {

}
