import { Routes, RouterOutlet } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Peliculas } from './pages/peliculas/peliculas';
import { Login } from './components/login/login';
import { Pag404 } from './pages/pag404/pag404';
import { AcercaDe } from './pages/acerca-de/acerca-de';

export const routes: Routes = [
    {path:'inicio', component:Inicio},
    {path:'peliculas', component:Peliculas},
    {path:'login', component:Login},
    {path:'acerca-de', component:AcercaDe},
    
    
     {path:'**', component:Pag404},



    {path:'', redirectTo:'/Inicio', pathMatch:'full'}
];
