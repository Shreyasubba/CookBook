import { EventEmitter, Injectable } from "@angular/core";
import { Reciep } from "./reciep.model";
import { Ingredient } from "../shared/ingredient.module";
import { ShoppingListService } from "../shopping-lists/shopping-list.service";
import { Subject } from "rxjs";
@Injectable()
export class RecipeService{
    recipeSelected= new Subject<Reciep>()
    private recipes: Reciep[] =[
        new Reciep('Recipe1','https://premasculinary.com/wp-content/uploads/2021/08/Brown-Rice-Idli-Dosa-Recipe-How-to-grind-Idli-Dosa-Batter-using-Brown-Rice.-1-scaled.jpg',' It is what it is ',
            [new Ingredient('idli',5),new Ingredient('leaves',20)]
        ),
        new Reciep('Another Recipe1','https://premasculinary.com/wp-content/uploads/2021/08/Brown-Rice-Idli-Dosa-Recipe-How-to-grind-Idli-Dosa-Batter-using-Brown-Rice.-1-scaled.jpg',' It is what it is ',
        [new Ingredient('idli',5),new Ingredient('leaves',20)])

        
      ];
    constructor(private shoppingLService:ShoppingListService){}
      getRecipes(){
        return this.recipes.slice();
      }
      AddRecipeIngToShoppingList(ingredients:Ingredient[]){
        this.shoppingLService.addIngredients(ingredients);
        console.log('In recipe Service')
      }
      getById(id:number){
        return this.recipes.slice()[id];
      }
}
