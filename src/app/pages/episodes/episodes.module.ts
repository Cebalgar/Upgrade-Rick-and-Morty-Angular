import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesContentComponent } from './components/episodes-content/episodes-content.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';


@NgModule({
  declarations: [
    EpisodesContentComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    HttpClientModule
  ],
  providers: [HttpRequestService]
})
export class EpisodesModule { }
