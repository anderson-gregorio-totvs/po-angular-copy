import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuService } from './menu.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent],
  exports: [],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {}
