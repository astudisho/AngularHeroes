//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Material Components
import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatIcon } from '@angular/material';

//Internal imports
import { HeroesComponent } from './heroes/heroes.component';
import { AstuNavBarComponent } from './astu-nav-bar/astu-nav-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    AstuNavBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
