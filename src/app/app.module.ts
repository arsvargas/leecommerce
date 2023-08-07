import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { ParceirosComponent } from './components/parceiros/parceiros.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { FooterComponent } from './components/footer/footer.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { Text01Component } from './components/text01/text01.component';
import { Text02Component } from './components/text02/text02.component';
import { Text03Component } from './components/text03/text03.component';
import { Text04Component } from './components/text04/text04.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    MenuPrincipalComponent,
    ParceirosComponent,
    QuemSomosComponent,
    FooterComponent,
    PresentationComponent,
    Text01Component,
    Text02Component,
    Text03Component,
    Text04Component,
    WhatWeDoComponent,
    PartnersComponent,
    ReviewsComponent,
    PortfolioComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
