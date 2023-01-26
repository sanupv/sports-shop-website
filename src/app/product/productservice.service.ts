import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  search=new BehaviorSubject("")

  constructor(private httpclient: HttpClient) { }


  //http request view all product 
  viewAllProducts() {
    return this.httpclient.get("http://localhost:3000/products")
  }

  addProduct(newproduct: any) {
    return this.httpclient.post("http://localhost:3000/products", newproduct)
  }

  //api to get single product data
  viewproduct(id: any) {

    return this.httpclient.get("http://localhost:3000/products/" + id)

  }

  //delete 
  deleteProduct(id: any) {
    return this.httpclient.delete("http://localhost:3000/products/" + id)
  }

  //edit product
  updateProduct(id:any,data:any){
    return this.httpclient.put("http://localhost:3000/products/" + id,data)
  }

}
