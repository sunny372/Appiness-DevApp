import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShare } from '../../_services/DataShare';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: []
})
export class OrderdetailsComponent implements OnInit {
  detailObj: any = {};

  constructor(private details: DataShare,
              private router: Router) { }

  ngOnInit(): void {
    this.details.getDetails().subscribe(obj => this.detailObj = obj);
    if (this.detailObj === null) {
      this.router.navigate(['/']);
    }
  }

  // method to show orders screen
  goToPrev(): void {
    this.router.navigate(['./orders']);
  }

}
