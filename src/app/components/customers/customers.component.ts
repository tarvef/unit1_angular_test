import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(
    private customerService: CustomerService
  ) { }

  enterprisesData: any;

  ngOnInit(): void {
    this.getEnterprises();
  }

  getEnterprises(){
    this.enterprisesData = this.customerService.getGameDevelopers()
  }

}
