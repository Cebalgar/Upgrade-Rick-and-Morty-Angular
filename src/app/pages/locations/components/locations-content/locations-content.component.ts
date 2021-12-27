import { Ilocation } from './../../../../models/Ilocations';
import { HttpRequestService } from './../../../../shared/services/http-request.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-locations-content',
  templateUrl: './locations-content.component.html',
  styleUrls: ['./locations-content.component.scss']
})
export class LocationsContentComponent implements OnInit {

  private URL:string="https://rickandmortyapi.com/api/location";
  public locations:Ilocation[] =[];

  constructor(private httpRequestService: HttpRequestService) {}

  ngOnInit(): void {
    this.RecoverLocationsData();
  }
  public RecoverLocationsData(){
    this.httpRequestService.getData(this.URL).subscribe((data:any)=>{
      const results:Ilocation[]=data.results;
      const formattedResults=results.map(({name,type,dimension})=>({
        name,
        type,
        dimension
      }))
      this.locations=formattedResults;

    })
  }

}
