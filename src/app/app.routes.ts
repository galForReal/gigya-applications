import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {TestPageComponent} from './test-page/test-page.component';
import {IndexGridComponent} from './index-grid/index-grid.component';


const routes: Routes = [
  {path:'', redirectTo: 'index',  component:IndexGridComponent},
  {path:'testPage/:id', component:TestPageComponent},
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
