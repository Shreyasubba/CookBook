import { Component, EventEmitter, Input,OnInit,Output } from '@angular/core';
import {Reciep} from '../reciep.model';
import { RecipeService } from '../reciep.service';

@Component({
  selector: 'app-reciep-list',
  templateUrl: './reciep-list.component.html',
  styleUrl: './reciep-list.component.css'
})
export class ReciepListComponent implements OnInit {
  constructor(private recipeService:RecipeService){}
  recipes:Reciep[]
  
  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes()
  }

}
