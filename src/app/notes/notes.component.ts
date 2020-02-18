import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddnoteService } from '../addnote.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() posts;
  @Input() inputValue: string;
  @Input()  items1:Note[];
  show=false;
  private selectedproductID=1;


  // @Output() inputValueChange = new EventEmitter();
 
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private notesService:AddnoteService) { }

  ngOnInit() {
    this.items1=this.notesService.getProducts();
    
    let indx =this.items1.filter(x => x.id == this.selectedproductID)[-1];  
    if(indx){
      this.show=true;
    }
  }
  

}
