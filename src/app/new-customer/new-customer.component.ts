import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../services/customer.service";
import {Customer} from "../model/customer.model";
import {catchError, throwError} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  newCustomerFormGroup! : FormGroup;
  constructor(private fb : FormBuilder , private customerServive : CustomerService , private router:Router){

  }
  ngOnInit() :void{
    this.newCustomerFormGroup=this.fb.group({
      name:this.fb.control(null, [Validators.required]),
      email:this.fb.control(null, [Validators.email, Validators.required])
      }
    )
  }

  handleSaveCustomer() {
  let customer : Customer = this.newCustomerFormGroup.value;
  this.customerServive.saveCustomer(customer).subscribe({
    next : data=>{
      alert("Customer has been saved");
     // this.newCustomerFormGroup.reset();
      this.router.navigateByUrl("/customers");
    },
    error : err=>{
      console.log(err);
    }
  })
  }
}
