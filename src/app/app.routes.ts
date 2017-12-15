import { Routes, RouterModule } from '@angular/router';
// import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home';



// ROUTER KRYESOR
const APP_ROUTES: Routes = [
  
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule'},
    { path: 'shopping-list', loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule'},
   // { path: 'log-out', component: ShoppingListComponent },

  ];
export const routing = RouterModule.forRoot (APP_ROUTES);
