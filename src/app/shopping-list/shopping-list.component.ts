import { Component, OnInit } from '@angular/core';

import { ShoppingListAddComponent } from './shopping-list-add.component';

import { ShoppingListService } from './shopping-list.service';

import { Ingredient } from '../shared/ingredient';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  item: Ingredient;
  isAdd = true;

items: Ingredient[] = [];
selectedItem: Ingredient = null;

  constructor(private sls: ShoppingListService) { }

ngOnInit() { this.items = this.sls.getItems(); }

 onSelectItem (item: Ingredient){
   this.selectedItem = item;
 }
 onCleared() {
   this.selectedItem = null;
 }
}