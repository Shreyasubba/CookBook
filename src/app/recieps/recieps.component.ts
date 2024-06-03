import { Component, OnDestroy, OnInit } from '@angular/core';
import { Reciep } from './reciep.model';
import { RecipeService } from './reciep.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recieps',
  templateUrl: './recieps.component.html',
  styleUrl: './recieps.component.css',
  providers:[RecipeService]
})
export class ReciepsComponent implements OnInit,OnDestroy {
  selectedRecipe:Reciep;
  private recipeSelectChSub:Subscription;
  constructor(private recipeService:RecipeService){}
  ngOnInit(): void {
   this.recipeSelectChSub= this.recipeService.recipeSelected.subscribe((recipe:Reciep)=>{
      this.selectedRecipe=recipe;
    });
  }
  ngOnDestroy(): void {
    this.recipeSelectChSub.unsubscribe();
  }
}
