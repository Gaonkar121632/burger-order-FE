import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBurgerComponent } from './create-burger/create-burger.component';
import { FormsModule } from '@angular/forms';
import { ListBurgerComponent } from './list-burger/list-burger.component';
import { CommonService } from '../common.service';


@NgModule({
  declarations: [CreateBurgerComponent, ListBurgerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CreateBurgerComponent],
  providers: [ CommonService ] 
})
export class BurgerModule { }
