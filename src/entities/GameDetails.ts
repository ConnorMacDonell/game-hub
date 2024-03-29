import { Platform } from "./Platform";


export interface GameDetails {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  rating: number;
  platforms: Platform[];
}
