import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductmanagerComponent } from './productmanager/productmanager.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { GlobalService } from './global.service';
import { ServiceService } from './service.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductmanagerComponent,
    UsermanagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [GlobalService,
    ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
