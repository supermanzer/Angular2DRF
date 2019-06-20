import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import {MatCardModule, MatGridListModule, MatButtonModule, MatSlideToggleModule, MatFormFieldModule} from '@angular/material';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoCreateComponent,
    TodoItemComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
