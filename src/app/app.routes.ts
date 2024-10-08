import { Routes } from '@angular/router';
import { HomeComponent } from './Paginas/home/home.component';
import { SobreNosComponent } from './Paginas/sobre-nos/sobre-nos.component';
import { EventosComponent } from './Paginas/eventos/eventos.component';
import { PremiosComponent } from './Paginas/premios/premios.component';
import { EnsinoComponent } from './Paginas/ensino/ensino.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sobre-nos', component: SobreNosComponent},
    {path: 'eventos', component: EventosComponent},
    {path: 'ensino', component: EnsinoComponent},
    {path: 'premiacoes', component: PremiosComponent},
];
