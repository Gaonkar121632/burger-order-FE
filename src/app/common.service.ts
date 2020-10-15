import { Injectable } from '@angular/core';
import { allOrders } from './burger/mock-burger';
// import { Burger } from './create-burger/burger';



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { 
  }

  getAllOrders(){
    return allOrders
  }

  updateOrder(order){
    allOrders.push(order)
  }
}
