import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddnoteService } from '../addnote.service';
import { Note } from '../note';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css']
})
export class DescComponent implements OnInit {
sub;
id;
product:Note;
value:string;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private notesService:AddnoteService)
   {
    this.value="New Notes"
    }

  ngOnInit() {
    this.sub=this.activatedRoute.paramMap.subscribe(params=>{
      console.log(params);
      this.id=params.get('id');
      let items1=this.notesService.getProducts();
      this.product=items1.find(p=>p.id==this.id);
    });
  }

}
