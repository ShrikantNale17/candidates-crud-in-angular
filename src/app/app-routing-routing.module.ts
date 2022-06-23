import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'add', component: AddCandidateComponent },
  { path: 'edit/:id', component: EditCandidateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
