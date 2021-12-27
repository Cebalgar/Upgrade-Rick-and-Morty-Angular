import { CharacterResponseApi } from './../../../../models/Icharacters';
import { HttpRequestService } from './../../../../shared/services/http-request.service';
import { Component, OnInit } from '@angular/core';
import { Icharacter } from 'src/app/models/Icharacters';

@Component({
  selector: 'app-characters-content',
  templateUrl: './characters-content.component.html',
  styleUrls: ['./characters-content.component.scss']
})
export class CharactersContentComponent implements OnInit {
  private URL:string="https://rickandmortyapi.com/api/character";
  public characterList:Icharacter [] =[];

  constructor(private httpRequestService: HttpRequestService) { }


  ngOnInit(): void {

    this.RecoverCharactersData();
  }
    public RecoverCharactersData(){
      this.httpRequestService.getData(this.URL).
      subscribe((data:any)=>{

        const results:Icharacter[]=data.results;
        const formattedResults = results.map(({name,image,gender,species,status})=>({
          name,
          image,
          gender,
          species,
          status
        }))

        this.characterList=formattedResults;

      })
    }
}
