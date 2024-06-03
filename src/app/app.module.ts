import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReciepsComponent } from './recieps/recieps.component';
import { ReciepListComponent } from './recieps/reciep-list/reciep-list.component';
import { ReciepeDetailComponent } from './recieps/reciepe-detail/reciepe-detail.component';
import { ReciepeItemComponent } from './recieps/reciep-list/reciepe-item/reciepe-item.component';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ShoppingListEditComponent } from './shopping-lists/shopping-list-edit/shopping-list-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-lists/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recieps/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recieps/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReciepsComponent,
    ReciepListComponent,
    ReciepeDetailComponent,
    ReciepeItemComponent,
    ShoppingListsComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
