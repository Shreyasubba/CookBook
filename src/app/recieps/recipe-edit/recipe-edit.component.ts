import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit{
  recipeID:number;
  editMode=false
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.recipeID=+params['id']
        this.editMode=params['id']!=null;
        console.log(this.editMode)
      }
    )
  }
}
