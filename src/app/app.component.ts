import { Component } from '@angular/core';
import { AddnoteService } from './addnote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'automate';
  date=new Date();
  value:string;
  constructor(private notesService:AddnoteService) { 
    this.value="New Notes"
  }
  notes=[
    {
      id:1,
      notes1:'New Notes',
      description:'No Description to show',
      date:new Date()  
    },
  ]
  addtocart(note){
    this.notesService.addNote(note)
  }
  delete(id) {
    this.notesService.delete();
      this.notes = this.notes.filter((elem) => {
          return elem.id !== id;
      });
  }
}
