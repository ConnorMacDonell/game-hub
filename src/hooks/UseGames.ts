import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./UseGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number,
  slug: string,
  name: string,
  background_image: string,
  parent_platforms: { platform: Platform }[],
  metacritic: number
}

const useGames = (gameQuery: GameQuery) =>
useData<Game>(
  '/games',
  {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder?.value,
      search: gameQuery.searchText
    }
  },
  [gameQuery]);
export default useGames;