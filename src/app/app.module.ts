import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContinenteleComponent } from './continentele/continentele.component';
import { EuropaComponent } from './europa/europa.component';
import { AfricaComponent } from './africa/africa.component';
import { AsiaComponent } from './asia/asia.component';
import { AustraliaComponent } from './australia/australia.component';
import { PolulNordComponent } from './polul-nord/polul-nord.component';
import { AntarctidaComponent } from './antarctida/antarctida.component';
import { AmercaDeSudComponent } from './amerca-de-sud/amerca-de-sud.component';
import { AmercaDeNordComponent } from './amerca-de-nord/amerca-de-nord.component';
import { EducativCardComponent } from './educativ-card/educativ-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { AustraliaFloraComponent } from './australia-flora/australia-flora.component';
import { JocNumarareAustraliaComponent } from './joc-numarare-australia/joc-numarare-australia.component';
import { AsiaFaunaComponent } from './asia-fauna/asia-fauna.component';
import { AsiaJocComponent } from './asia-joc/asia-joc.component';
import { AfricaJocComponent } from './africa-joc/africa-joc.component';
import { EuropaJocComponent } from './europa-joc/europa-joc.component';
import { AmericaSudCuriozitatiComponent } from './america-sud-curiozitati/america-sud-curiozitati.component';
import { AmericaNordCuriozitatiComponent } from './america-nord-curiozitati/america-nord-curiozitati.component';

@NgModule({
  declarations: [
    AppComponent,
    ContinenteleComponent,
    EuropaComponent,
    AfricaComponent,
    AsiaComponent,
    AustraliaComponent,
    PolulNordComponent,
    AntarctidaComponent,
    AmercaDeSudComponent,
    AmercaDeNordComponent,
    EducativCardComponent,
    AustraliaFloraComponent,
    JocNumarareAustraliaComponent,
    AsiaFaunaComponent,
    AsiaJocComponent,
    AfricaJocComponent,
    EuropaJocComponent,
    AmericaSudCuriozitatiComponent,
    AmericaNordCuriozitatiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
