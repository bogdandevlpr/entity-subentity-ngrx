import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducerProvider, reducerToken, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducerToken),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule
  ],
  providers: [reducerProvider, UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
