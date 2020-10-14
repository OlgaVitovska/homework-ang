import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { SortPricePipe } from './sort-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    SortPricePipe
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
