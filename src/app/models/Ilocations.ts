export interface Ilocation{

  name:string;
  type:string;
  dimension:string;
}
export interface EpisodeResponseApi {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string | null;
  };

  results: Ilocation[];
}
