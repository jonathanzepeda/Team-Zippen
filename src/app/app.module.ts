import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

import { HttpModule } from '@angular/http';

import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainContainerComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
