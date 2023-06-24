import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer.model";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  backEndHost : string ="http://localhost:8085"

  constructor(private http:HttpClient) { }

  public getCustomers():Observable<Array<Customer>>{

   return this.http.get<Array<Customer>>(this.backEndHost+"/customers");
  }
  public searchCustomers(keyWord : string):Observable<Array<Customer>>{

    return this.http.get<Array<Customer>>(this.backEndHost+"/customers/search?keyword="+keyWord);
  }

  public saveCustomer(customer : Customer){
    return this.http.post<Customer>(this.backEndHost+"/customers",customer);
  }

  public deleteCustomer(id : number){
    return this.http.delete(this.backEndHost+"/customers/"+id);
  }

}
