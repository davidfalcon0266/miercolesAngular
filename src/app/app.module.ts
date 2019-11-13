import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/header/nav/nav.component';
import { ContentComponent } from './components/main/content/content.component';
import { ContactComponent } from './components/footer/contact/contact.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { ngModuleJitUrl } from '@angular/compiler';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ɵNgClassImpl } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    ContactComponent,
    ConsultaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
