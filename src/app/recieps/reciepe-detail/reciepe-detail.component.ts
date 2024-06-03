import { Component, Input, OnInit } from '@angular/core';
import { Reciep } from '../reciep.model';
import { ShoppingListService } from '../../shopping-lists/shopping-list.service';
import { RecipeService } from '../reciep.service';
import { ActivatedRoute, Params, Route } from '@angular/router';

@Component({
  selector: 'app-reciepe-detail',
  templateUrl: './reciepe-detail.component.html',
  styleUrl: './reciepe-detail.component.css'
})

export class ReciepeDetailComponent implements OnInit {
  recipeId:number;
  recipeDisplay:Reciep;

  constructor(private recipeService:RecipeService,private route:ActivatedRoute){}
  ngOnInit(): void {
   
    
    this.route.params
      .subscribe((params:Params) => {this.recipeId = +params['id'];
      this.recipeDisplay= this.recipeService.getById(this.recipeId)})
      
  }

 addToShoppingList(){
      this.recipeService.AddRecipeIngToShoppingList(this.recipeDisplay.ingredients)
 }
}
