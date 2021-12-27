import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersContentComponent } from './components/characters-content/characters-content.component';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';


@NgModule({
  declarations: [
    CharactersContentComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule
  ],
  providers:[HttpRequestService]
})
export class CharactersModule { }
