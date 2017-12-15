import { NgModule } from '@angular/core/src/metadata/ng_module';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesComponent } from 'app/recipes/recipes.component';
import { RecipeDetailComponent } from 'app/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from 'app/recipes/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from 'app/recipes/recipe-list/recipe-item.component';
import { RecipeListComponent } from 'app/recipes/recipe-list/recipe-list.component';
import { RecipeStartComponent } from 'app/recipes/recipe-start.component';
import { recipesRouting } from 'app/recipes/recipes.routing';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeItemComponent,
        RecipeListComponent,
        RecipeStartComponent
    ],
    imports: [
        SharedModule, ReactiveFormsModule, recipesRouting
    ]



})
export class RecipesModule {}