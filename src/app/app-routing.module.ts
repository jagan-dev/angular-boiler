import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLocateComponent } from './form-locate/form-locate.component'
import { MenuBarContendComponent } from './menu-bar/menu-bar-contend/menu-bar-contend.component'

const routes: Routes = [
  { path : "", redirectTo: 'menu-bar-contend',pathMatch:"full"},
  { path : 'menu-bar-contend', component: MenuBarContendComponent},
  { path : 'form-locate', component: FormLocateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
