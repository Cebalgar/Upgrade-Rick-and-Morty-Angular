export interface Icharacter{

  name:string;
  image:string;
  gender:string;
  species:string;
  status:string;


}

  export interface CharacterResponseApi {
    info: {
      count: number;
      next: string;
      pages: number;
      prev: string | null;
    };

    results: Icharacter[];
  }
