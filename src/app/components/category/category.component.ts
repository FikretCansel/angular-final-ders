import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[]=[];
  dataLoaded=false;
  currentCategory:Category={categoryId:0,categoryName:""};
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.categoryService.getCategoriess().subscribe((response=>{
      this.categories=response.data;
      this.dataLoaded=false;
    }
    ));
  }
  setCurrentCategory(category:Category){
    this.currentCategory=category;
  }
  getCurrentCategoryClass(category:Category){
    if(category==this.currentCategory){
      return "btn list-group-item active";
    }
    else return " btn list-group-item";
  }
  getAllCategoryClass(){
    if(this.currentCategory.categoryId==0){
      return "btn list-group-item active";
    }
    else return "btn list-group-item";
  }
}
