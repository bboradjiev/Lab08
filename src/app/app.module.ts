import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OriginalDatePipe } from 'src/pipes/original-date.pipe';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [AppComponent, ListComponent, OriginalDatePipe],
  imports: [HttpClientModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
