export interface Game {
  id: number;
  title: string;
  type: string;
  genre: string[];
  brand: string;
  game: string;
  edition: string | null;
  dlcType: string | null;
  price: number;
  discount: number;
  img: string;
}
