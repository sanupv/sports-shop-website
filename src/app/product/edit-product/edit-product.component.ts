import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  productid: any
  productdata: any

  constructor(private ar: ActivatedRoute, private ps: ProductserviceService,private router:Router) { }
  ngOninit(): void {
    this.ar.params.subscribe((data: any) => {
      this.productid = data["id"]
    })

    this.ps.viewproduct(this.productid).subscribe((item: any) => {
      this.productdata = item
    })

  }

  updateProduct(form: any) {
    let updateproduct = {
      id: form.value.id,
      productName: form.value.productName,
      categoryId: form.value.categoryId,
      description: form.value.description,
      price: form.value.price,
      isAvailable: form.value.isAvailable,
      productImage: form.value.productImage,
      rating: form.value.rating,
      review: form.value.review,
      vendorName: form.value.vendorName,
      warranty: form.value.warranty
    }

    this.ps.updateProduct(this.productid, updateproduct).subscribe((item: any) => {
      alert("product details updated")
      this.router.navigateByUrl("product")
    })
  }


}
