import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLocateComponent } from './form-locate/form-locate.component'
import { MenuBarContendComponent } from './menu-bar/menu-bar-contend/menu-bar-contend.component'
import { BuyingSellingComponent } from './buying-selling/buying-selling.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



const routes: Routes = [
  { path : "", redirectTo: 'home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'nav-bar',component:NavBarComponent},
  {path:'guest',component:GuestComponent},
  {path:'buy',component:BuyingSellingComponent},
  { path : 'menu-bar-contend', component: MenuBarContendComponent},
  { path : 'form-locate', component: FormLocateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
