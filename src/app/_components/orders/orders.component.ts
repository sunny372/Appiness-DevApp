import { Orderslist } from './../../_helpers/orderslist';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShare } from 'src/app/_services/DataShare';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: []
})
export class OrdersComponent implements OnInit {
  orderList: any = [];

  constructor(private list: Orderslist,
              private router: Router,
              private ds: DataShare) { }

  ngOnInit(): void {
    // order list to be saved in variable, when this component is loaded
    this.orderList = this.list.getOrderList();
  }

  // method to change the status of the order
  changeStatus(i: any): void {
    switch (i.orderStatus) {
      case 'Order Received':
        i.orderStatus = 'Preparing';
        break;
      case 'Preparing':
        i.orderStatus = 'Ready to Serve';
        break;
    }
  }

  // method to show order details & navigates to order details page.
  showOrderDetails(i: any): void {
    this.ds.setDetails(i);
    this.router.navigate(['/order-details']);
  }

}
