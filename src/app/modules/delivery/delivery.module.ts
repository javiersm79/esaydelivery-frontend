import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryMainComponent } from './pages/main/delivery.component';

@NgModule({
  declarations: [
    DeliveryMainComponent
  ],
  imports: [
    BrowserModule,
    DeliveryRoutingModule
  ],
  providers: [],
  bootstrap: [DeliveryMainComponent]
})
export class AppModule { }
