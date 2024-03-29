import APIClient from "./api-client";
import { Platform } from "./platformService";

export interface GameDetails {
  id: number,
  slug: string,
  name: string,
  description_raw: string,
  rating: number,
  platforms: Platform[]
}

export default new APIClient<GameDetails>('/games');