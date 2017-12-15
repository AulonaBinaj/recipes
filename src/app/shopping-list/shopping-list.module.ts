import { NgModule } from '@angular/core/src/metadata/ng_module';
import { FormsModule } from '@angular/forms';
import { ShoppingListAddComponent } from 'app/shopping-list/shopping-list-add.component';
import { ShoppingListComponent } from 'app/shopping-list/shopping-list.component';
import { shoppingListRouting } from 'app/shopping-list/shopping-list.routing';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
    declarations: [ShoppingListAddComponent, ShoppingListComponent],
    imports: [FormsModule, SharedModule, shoppingListRouting]
})
export class ShoppingListModule { }