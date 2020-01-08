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
import { JocNumarareAustraliaComponent } from './joc-numarare-australia/joc-numarare-australia.component';
import { AsiaFaunaComponent } from './asia-fauna/asia-fauna.component';
import { AsiaJocComponent } from './asia-joc/asia-joc.component';
import { AfricaJocComponent } from './africa-joc/africa-joc.component';
import { EuropaJocComponent } from './europa-joc/europa-joc.component';
import { AmericaSudCuriozitatiComponent } from './america-sud-curiozitati/america-sud-curiozitati.component';
import { AmericaNordCuriozitatiComponent } from './america-nord-curiozitati/america-nord-curiozitati.component';


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
  },
  {
    path: 'australia/joc',
    component: JocNumarareAustraliaComponent
  },
  {
    path: 'asia/fauna',
    component: AsiaFaunaComponent
  },
  {
    path: 'asia/joc',
    component: AsiaJocComponent
  },
  {
    path: 'africa/joc',
    component: AfricaJocComponent
  },
  {
    path: 'europa/joc',
    component: EuropaJocComponent
  },
  {
    path: 'americaSud/curiozitati'
    , component: AmericaSudCuriozitatiComponent
  },
  {
    path: 'americaNord/curiozitati'
    , component: AmericaNordCuriozitatiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
