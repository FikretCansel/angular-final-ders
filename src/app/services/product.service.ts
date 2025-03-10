import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/ListResponseModel';
import {ResponseModel} from "../models/responseModel";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44366/api/products";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl+"/getall");
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath=this.apiUrl+"/getbycategoryId?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/add",product);
  }
}
