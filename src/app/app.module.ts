import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModulesModule } from './menu-bar/module/module.module'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormLocateComponent } from './form-locate/form-locate.component';
import { FormModuleModule } from './form-locate/form-module/form-module.module'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { MenuBarContendComponent } from './menu-bar/menu-bar-contend/menu-bar-contend.component';


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
      MenuBarContendComponent

   ],
  imports: [
    BrowserModule,
    NgxCaptchaModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ModulesModule,
    FormModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
