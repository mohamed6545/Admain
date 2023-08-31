import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/products/services/products.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  products: any;
  constructor(private service:CartsService , private build:FormBuilder , private productService:ProductsService) {
  }
  carts:any[] = [];
  total=0
  form!:FormGroup
  details :any;
  ngOnInit(): void {
    this.form=this.build.group({
      start:[''],
      end:['']
    })
    this.getAllCarts()
  }


  
getAllCarts(){
  this.service.getAllCarts().subscribe((res:any) => {
    this.carts=res
  })
}
 

/* applyFilter(){
  let date=this.form.value
  this.service.getAllCarts(date).subscribe((res:any) => {
    this.carts=res
  })
} */
  deleteCart(id:number) {
this.service.deleteCart(id).subscribe(res =>{
  this.getAllCarts()
  alert("Cart delered success")
})
}

 
view(index:number){
  this.products= []
  this.details = this.carts[index];
  for(let x in this.details.products){
    this.productService.getProductById(this.details.products[x].productId).subscribe(res =>{
      this.products.push({item: res , quantity:this.details.products[x]. quantity})
    })
  }
  console.log(this.details)
}
 
}
function deleteCart(id: any, number: any) {
  throw new Error('Function not implemented.');
}

