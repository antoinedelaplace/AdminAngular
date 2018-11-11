import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './component/hero-detail.component';
import {HeroesComponent} from "./component/heroes.component";
import {HeroService} from "./service/hero.service";
import {DashboardComponent} from "./component/dashboard.component";
import { AppRoutingModule }     from './app-routing.module';
import {HttpModule} from "@angular/http";
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';
import {HeroSearchComponent} from "./component/hero-search.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
