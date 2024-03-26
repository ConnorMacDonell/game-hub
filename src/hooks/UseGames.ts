import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import gameService, { Game } from "../services/gameservice";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: ({pageParam = 1}) => gameService.getAll({
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder?.value,
      search: gameQuery.searchText,
      _start: (pageParam - 1) * gameQuery.pageSize,
      _limit: gameQuery.pageSize,
      page: pageParam
    }
  }),
    staleTime: 24 * 60 * 60 * 1000, //24hr
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    }
})
  
export default useGames;