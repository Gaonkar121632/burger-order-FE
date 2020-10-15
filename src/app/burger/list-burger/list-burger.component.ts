import { Component, OnInit,DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';


@Component({
  selector: 'app-list-burger',
  templateUrl: './list-burger.component.html',
  styleUrls: ['./list-burger.component.scss']
})
export class ListBurgerComponent implements OnInit, DoCheck {

  public allOrders = [];
  public searchString='';
  public total:number;
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    this.getAllOrders()
  }

  ngDoCheck(){
    if (this.searchString) {
      this.allOrders=this.allOrders.filter(ele=>{
        const name=ele.name.toLowerCase();
        if(name.indexOf(this.searchString.toLowerCase())>-1) return ele
      })
      this.calcTotal()
    }else{
      this.getAllOrders()
    }
  }


  getAllOrders() {
    this.allOrders = this.commonService.getAllOrders()
    this.calcTotal()
  }

  calcTotal(){
    this.total=this.allOrders.reduce((acum,current)=>acum + current.price,0)
  }

  redirectCreate() {
    this.router.navigate([`./create`]);
  }


}
