//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HttpClientModule } from '@angular/common/http'

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Material Components
import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatIcon } from '@angular/material';

//Internal imports
import { HeroesComponent } from './heroes/heroes.component';
import { AstuNavBarComponent } from './astu-nav-bar/astu-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    AstuNavBarComponent,
    FooterComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCarouselModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
