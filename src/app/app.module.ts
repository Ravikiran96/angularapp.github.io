import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DescComponent } from './desc/desc.component';
import { CategoryPipe } from 'src/app/categories.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    DescComponent,
    CategoryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
