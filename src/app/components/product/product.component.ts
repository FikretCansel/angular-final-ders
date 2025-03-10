import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {//OnInit cpmponent ilk açıldıgında çalışan komponent

  products:Product[]=[];
  dataLoaded=false;
  filterText=""
  //productResponseModel:ProductResponseModel={};
  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }
      else this.getProducts(); 
    });
  }
  getProducts(){
    this.productService.getProducts().subscribe((result)=>{
      this.products=result.data
      this.dataLoaded=true;
    });
  }
  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe((result)=>{
      this.products=result.data
      this.dataLoaded=true;
    });
  }
  addToCart(product:Product){
    console.log(product);
    this.toastrService.success("Sepete Eklendi",product.productName);
    this.cartService.addToCart(product);
  }
}
