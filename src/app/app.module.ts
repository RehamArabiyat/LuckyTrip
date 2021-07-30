import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { HeaderComponent } from './header/header.component';
//import { AngularFontAwesomeModule } from 'angular-font-awesome'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DestinationService } from './services/destination.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DestinationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
