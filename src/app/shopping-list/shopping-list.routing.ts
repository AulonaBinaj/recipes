import { Routes, RouterModule } from '@angular/router'; 
import { ShoppingListComponent } from './shopping-list.component'; 

// ROUTER QE DO TE SHERBEJNE SI FEMIJE
const SH_ROUTES: Routes = [
 { path: '', component: ShoppingListComponent }
];
export const shoppingListRouting = RouterModule.forChild(SH_ROUTES);
