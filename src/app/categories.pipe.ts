import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'category' })
export class CategoryPipe implements PipeTransform {
  transform(items: any, searchText: any): any {
    if(searchText == null) {
    return items;
  }
 
   
    return items.filter(function(category){
      //  return category.itemname.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      // return category.columns.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      return JSON.stringify(category).includes(searchText);
      
      
    });
   
  }
  
}