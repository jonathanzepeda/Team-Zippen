import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

import { HttpModule } from '@angular/http';


import { FormsModule} from '@angular/forms';
import { ToastModule } from './toast/toast.module';
import { HttpClientModule } from '@angular/common/http';

import { LocationService} from './location.service';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainContainerComponent,
    MainFooterComponent,
    // MatToolbar
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    ToastModule,
    HttpClientModule
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
