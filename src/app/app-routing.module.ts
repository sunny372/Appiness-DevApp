import { OrderdetailsComponent } from './_components/orderdetails/orderdetails.component';
import { OrdersComponent } from './_components/orders/orders.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'order-details', component: OrderdetailsComponent },
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  { path: '**', redirectTo: 'orders', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
