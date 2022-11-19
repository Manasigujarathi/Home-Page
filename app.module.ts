import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { SearchComponent } from './search/search.component';
import { FAQComponent } from './faq/faq.component';
// import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  exports:[
  ContentComponent
  ],
  declarations: [
    AppComponent,
    ContentComponent,
    SearchComponent,
    FAQComponent,
    // SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
