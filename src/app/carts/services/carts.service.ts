import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
 

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }

 getAllCarts(){
 /*  let params=new HttpParams()
  params=params.append("startDate" ,param?.start ).append("endDate" , param.end) */
  return this.http.get("http://fakestoreapi.com/carts")
 }

 deleteCart(id:number) {
  return this.http.delete( "http://fakestoreapi.com/carts/"+id)
 }


}
