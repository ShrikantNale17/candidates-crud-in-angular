import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCandidateComponent,
    ListComponent,
    EditCandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
