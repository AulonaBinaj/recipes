import { Component, OnInit, OnDestroy } from '@angular/core';
//import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe-list/recipe';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component ({
    moduleId: module.id,
    selector: 'rb-recipe-edit',
    templateUrl: 'recipe-edit.component.html',
    styles: []
})

export class RecipeEditComponent implements OnInit, OnDestroy{
    MyForm: FormGroup;
    private subscription: Subscription;
    private recipeIndex: number;
    private recipe: Recipe;
    private isNew = true;

constructor( private route: ActivatedRoute,
             private recipeService: RecipeService,
             private formBuilder: FormBuilder,
             private router: Router) {}
ngOnInit () {
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                if (params.hasOwnProperty('id')) {
                    this.isNew = false;
                    this.recipeIndex = +params['id'];
                    this.recipe = this.recipeService.getRecipe(this.recipeIndex);
                } else {
                    this.isNew =  true;
                    this.recipe = null;
                }
                this.initForm();
              }
        );
    }
    onSubmit(){
        const newRecipe = this.MyForm.value;
        if (this.isNew) {
            this.recipeService.addRecipe(newRecipe);
        } else {
            this.recipeService.editRecipe(this.recipe, newRecipe);
        }
        this.navigateBack();
    }
    onCancel(){
        this.navigateBack();
    }
   
    onAddItem (name: string, amount: string) {
        (<FormArray>this.MyForm.controls['ingredients']).push(
            new FormGroup ({
                name: new FormControl(name, Validators.required),
                amount: new FormControl(amount, Validators.required)
            })
        );
    }

    onRemoveItem(index: number){
        (<FormArray>this.MyForm.controls['ingredients']).removeAt(index);
     }
 
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    private  navigateBack(){
        this.router.navigate(['../']);

    }
private initForm() {
        let recipeName = '';
        let recipeImageUrl = '';
        let recipeContent = '';
        let recipeIngredients: FormArray = new FormArray ([]);

        if ( !this.isNew ) {
            if (this.recipe.hasOwnProperty('ingredients')) {
            for (let i = 0; i < this.recipe.ingredients.length; i++) {
                recipeIngredients.push(
                    new FormGroup({
                        name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
                        amount: new FormControl(this.recipe.ingredients[i].amount, Validators.required)
                    })
                );
            }
        }
        
            recipeName = this.recipe.name;
            recipeImageUrl = this.recipe.imagePath;
            recipeContent = this.recipe.description;
        }
        this.MyForm = this.formBuilder.group({
            name: [recipeName, Validators.required],
            imagePath: [recipeImageUrl, Validators.required],
            description: [recipeContent, Validators.required],
            ingredients: recipeIngredients
        });
    }

}