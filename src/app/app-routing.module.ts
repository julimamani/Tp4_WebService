import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertidorComponent } from './components/convertidor/convertidor.component';
import { HomeComponent } from './components/home/home.component';
import { PortalDePeliculasComponent } from './components/portal-de-peliculas/portal-de-peliculas.component';
import { TraductorComponent } from './components/traductor/traductor.component';

const routes: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'traductor', component: TraductorComponent },
 { path: 'convertidor', component: ConvertidorComponent },
 { path: 'portal-de-peliculas', component: PortalDePeliculasComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
