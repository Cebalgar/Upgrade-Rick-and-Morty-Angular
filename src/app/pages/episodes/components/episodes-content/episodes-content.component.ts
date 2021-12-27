import { Iepisode } from './../../../../models/Iepisodes';
import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Component({
  selector: 'app-episodes-content',
  templateUrl: './episodes-content.component.html',
  styleUrls: ['./episodes-content.component.scss']
})
export class EpisodesContentComponent implements OnInit {

  private URL:string="https://rickandmortyapi.com/api/episode";
  public episodesList:Iepisode[] =[];

  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {

    this.RecoverEpisodesData();
  }
  public RecoverEpisodesData(){
    this.httpRequestService.getData(this.URL).subscribe((data:any)=>{
      const results:Iepisode[]=data.results;
      const formattedResults=results.map(({id,name,episode,air_date})=>({
         id,
         name,
         episode,
         air_date,
      }))
      this.episodesList=formattedResults;

    })
  }
}
