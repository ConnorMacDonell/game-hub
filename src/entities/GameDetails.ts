import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";


export interface GameDetails {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  rating: number;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  genres: Genre[];
  publishers: Publisher[];
}
