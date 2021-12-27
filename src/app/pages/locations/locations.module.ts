import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsContentComponent } from './components/locations-content/locations-content.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';


@NgModule({
  declarations: [
    LocationsContentComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    HttpClientModule
  ],
  providers: [HttpRequestService]
})
export class LocationsModule { }
