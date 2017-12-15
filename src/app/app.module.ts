import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipeService } from 'app/recipes/recipe.service';
import { ShoppingListModule } from 'app/shopping-list/shopping-list.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { CoreModule } from 'app/core.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ShoppingListModule,
    CoreModule
  ],
  exports:
    [ReactiveFormsModule,
      BrowserModule],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
