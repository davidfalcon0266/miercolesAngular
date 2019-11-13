import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { ContactComponent } from './components/footer/contact/contact.component';
import { NavComponent } from './components/header/nav/nav.component';
import { ContentComponent } from './components/main/content/content.component';




const routes: Routes = [
  {path: 'consulta', component: ConsultaComponent},
  {path: 'footer', component:  ContactComponent },
  {path: 'header', component: NavComponent },
  {path: 'main', component: ContentComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
