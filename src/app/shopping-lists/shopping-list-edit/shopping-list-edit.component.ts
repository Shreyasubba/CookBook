import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput')nameInputRef:ElementRef;
  @ViewChild('amountInput')amountInputRef:ElementRef;
  @Output() ingredientAdded=new EventEmitter<Ingredient>();
constructor(private slService:ShoppingListService){

}
onAddItem(){
  const ingName=this.nameInputRef.nativeElement.value;
  const ingamt=this.amountInputRef.nativeElement.value;

  const newIngredient= new Ingredient(ingName,ingamt);
  this.slService.addIngredient(newIngredient)

}
}
