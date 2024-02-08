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

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', { params: {genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id]);
export default useGames;