import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModulesModule } from './menu-bar/module/module.module'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormLocateComponent } from './form-locate/form-locate.component';
import { FormModuleModule } from './form-locate/form-module/form-module.module'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { NgxCaptchaModule } from 'ngx-captcha';
import { MenuBarContendComponent } from './menu-bar/menu-bar-contend/menu-bar-contend.component';
import { GuestComponent } from './guest/guest.component';
import { BuyingSellingComponent } from './guest/buying-selling/buying-selling.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavComponent } from './guest/nav/nav.component';
import { ContentComponent } from './guest/content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'nav-bar',component:NavBarComponent},
  {path:'guest',component:GuestComponent},
  {path:'buy',component:BuyingSellingComponent}
 ];

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      MenuBarComponent,
      NavBarComponent,
      HomeComponent,
      DialogComponent,
      FormLocateComponent,
      MenuBarContendComponent,
      GuestComponent,
      BuyingSellingComponent,
      NavComponent,
      ContentComponent
   ],
  imports: [
    BrowserModule,
    // NgxCaptchaModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ModulesModule,
    FormModuleModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatExpansionModule,
    MatGridListModule,
    RouterModule.forRoot(routes)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
