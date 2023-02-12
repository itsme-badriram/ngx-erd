import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDiagramComponent } from './create-diagram/create-diagram.component';
import { ViewDiagramComponent } from './view-diagram/view-diagram.component';


const routes: Routes = [
  { path: 'create-diagram',
    component: CreateDiagramComponent},
    { path: 'view-diagram',
    component: ViewDiagramComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
