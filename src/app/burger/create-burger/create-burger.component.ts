import { Component, OnInit, DoCheck } from '@angular/core';
import { CommonService } from '../../common.service';
import { Burger } from './burger';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-burger',
  templateUrl: './create-burger.component.html',
  styleUrls: ['./create-burger.component.scss']
})
export class CreateBurgerComponent implements OnInit, DoCheck {
  newBurger = new Burger('', true, 0, 0, 2);
  public alert=false
  public newOrderd

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.calcCost()
  }

  newOrder() {
    this.showAlert()
    this.newOrderd = { ...this.newBurger }
    this.commonService.updateOrder(this.newOrderd)
    this.newBurger = new Burger('', true, 0, 0, 2);
    // console.log(this.commonService.getAllOrders());
  }

  calcCost() {
    this.newBurger.price = 0;
    if (this.newBurger.salad) {
      this.newBurger.price += 5
    }
    this.newBurger.price += (this.newBurger.bun * 5) + (this.newBurger.chees * 1) + (this.newBurger.cutlets * 2)
  }

  showAlert(){
    this.alert=true
    setTimeout(() => {
      this.alert=false
    }, 2000);
  }

  redirectToList() {
    this.router.navigate([`./list`]);
  }

}
