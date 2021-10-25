import {Component, NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameDetailsComponent } from './name-details/name-details.component';
import { TableComponent } from './table/table.component';
const routes: Routes = [
  {path:"", component:TableComponent},
  { path: ':name', component: NameDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
