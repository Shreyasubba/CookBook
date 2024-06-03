import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrl: './shopping-lists.component.css',
  providers:[]
})
export class ShoppingListsComponent implements OnInit, OnDestroy{
ingredients: Ingredient[]=[];
private igChangeSub:Subscription
constructor(private shoppingListService:ShoppingListService){
}
ngOnInit(){
  this.ingredients=this.shoppingListService.getIngredients()
  this.igChangeSub=this.shoppingListService.ingredientsChanged.subscribe((ingredients:Ingredient[])=>{
    this.ingredients=ingredients;
    console.log("Inngoninit")
  });
};
ngOnDestroy(): void {
  this.igChangeSub.unsubscribe()
}
}
