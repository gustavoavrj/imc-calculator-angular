import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { FormsModule } from '@angular/forms';
import { LandingboardComponent } from './landingboard/landingboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    LandingboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
