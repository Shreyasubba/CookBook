import { Component ,Input} from '@angular/core';
import {Reciep} from '../../reciep.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reciepe-item',
  templateUrl: './reciepe-item.component.html',
  styleUrl: './reciepe-item.component.css'
})
export class ReciepeItemComponent {
  
  @Input() recipe: Reciep;
 @Input() index:number;
  constructor(private router:Router){}
  

}
