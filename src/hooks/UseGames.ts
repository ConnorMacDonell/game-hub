import { FetchResponse } from "../services/api-client";
import gameService from "../services/gamesService";
import Game from "../entities/Game";
import { useInfiniteQuery } from "@tanstack/react-query";
import useGameQueryStore, { GameQuery } from "../stores/gameQueryStore";

const useGames = () =>{
  const gameQuery = useGameQueryStore(s => s.gameQuery)

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1}) => gameService.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder?.value,
        search: gameQuery.searchText,
        page: pageParam
      }
    }),
      staleTime: 24 * 60 * 60 * 1000, //24hr
      keepPreviousData: true,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
      }
})}
  
export default useGames;