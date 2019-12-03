import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContinenteleComponent } from './continentele/continentele.component';
import { EuropaComponent } from './europa/europa.component';
import { AfricaComponent } from './africa/africa.component';
import { AsiaComponent } from './asia/asia.component';
import { AmercaDeNordComponent } from './amerca-de-nord/amerca-de-nord.component';
import { AmercaDeSudComponent } from './amerca-de-sud/amerca-de-sud.component';
import { PolulNordComponent } from './polul-nord/polul-nord.component';
import { AntarctidaComponent } from './antarctida/antarctida.component';
import { AustraliaComponent } from './australia/australia.component';
import { AustraliaFloraComponent } from './australia-flora/australia-flora.component';


const routes: Routes = [
  {
    path: '',
    component: ContinenteleComponent
  },
  {
    path: 'europa',
    component: EuropaComponent
  },
  {
    path: 'africa',
    component: AfricaComponent
  },
  {
    path: 'asia',
    component: AsiaComponent
  },
  {
    path: 'america-nord',
    component: AmercaDeNordComponent
  },
  {
    path: 'america-sud',
    component: AmercaDeSudComponent
  },
  {
    path: 'polul-nord',
    component: PolulNordComponent
  },
  {
    path: 'antarctida',
    component: AntarctidaComponent
  },
  {
    path: 'australia',
    component: AustraliaComponent
  },
  {
    path: 'australia/flora',
    component: AustraliaFloraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
