import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { DescComponent } from './desc/desc.component';


const routes: Routes = [
  {
    path:'notes',
    component:NotesComponent
  },
  {
    path:'desc/:id',
    component:DescComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
