import {  RouterModule, Routes } from "@angular/router";
import { ReciepsComponent } from "./recieps/recieps.component";
import { ShoppingListsComponent } from "./shopping-lists/shopping-lists.component";
import { NgModule } from "@angular/core";
import { ReciepeDetailComponent } from "./recieps/reciepe-detail/reciepe-detail.component";
import { RecipeStartComponent } from "./recieps/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recieps/recipe-edit/recipe-edit.component";

const appRoutes:Routes=[
    {path:'', redirectTo: '/recipes',pathMatch:"full" },
    {path:'recipes', component: ReciepsComponent ,
        children:[
            {path:'new',component:RecipeEditComponent},
            {path:':id',component:ReciepeDetailComponent},
            {path:'',component:RecipeStartComponent,pathMatch:'full'},
            {path:':id/edit',component:RecipeEditComponent}

        ]
    },
    {path:'shopping-list', component: ShoppingListsComponent },
    
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}