import { Injectable,OnInit, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddnoteService implements OnInit {
  // items=[];
 
  items=[
    {
      id:1,
      notes:'New Notes',
      description:'No Description to show',
     date:2/17/2020 
    },
    {
      id:2,
      notes:'My Notes',
      description:'No Description to show',
      date:2/17/2020     },
    {
      id:3,
      notes:'My Time table',
      description:'Spend time at Office Premises',
      date:2/17/2020     },
    {
      id:4,
      notes:'Notes',
      description:'Angular 7 and JavaScript',
      date:2/17/2020     },
    {
      id:5,
      notes:'Blog Posts',
      description:'Notes on MVC',
      date:2/17/2020     },
    {
      id:6,
      notes:'ACTUC',
      description:'Laptop form the HP company',
      date:2/17/2020     },
    {
      id:7,
      notes:'ACTUC',
      description:'Laptop form the HP company',
      date:2/17/2020     },
    {
      id:8,
      notes:'ACTUC',
      description:'Laptop form the HP company',
      date:2/17/2020     },
    {
      id:9,
      notes:'ACTUC',
      description:'Laptop form the HP company',
      date:2/17/2020     },
    {
      id:10,
      notes:'ACTUC',
      description:'Laptop form the HP company',
      date:2/17/2020 
        }
  ]
  constructor() { }
ngOnInit(){
 
}
  addNote(note){
    this.items.unshift(note);
  }

  getProducts(){
    return this.items;
  }
  delete(){
    this.items.shift();  
  }
}
