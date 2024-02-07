import { Genre } from "./UseGenres";
import useData from "./useData";


export interface Platform {
  id: number,
  slug: string,
  name: string
}

export interface Game {
  id: number,
  slug: string,
  name: string,
  background_image: string,
  parent_platforms: { platform: Platform }[],
  metacritic: number
}

const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', { params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);
export default useGames;