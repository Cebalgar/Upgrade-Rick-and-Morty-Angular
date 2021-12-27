export interface Iepisode{

  id:number;
  name:string;
  episode:string;
  air_date:string;
}

  export interface EpisodeResponseApi {
    info: {
      count: number;
      next: string;
      pages: number;
      prev: string | null;
    };

    results: Iepisode[];
  }
