import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number,
  name: string,
  slug: string,
  games_count: number,
  image_background: string
}

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient
    .get<FetchResponse<Genre>>('/genres')
    .then(res => res.data),
  staleTime: 7 * 24 * 60 * 60 * 1000, //1week
  initialData: {count: genres.length, results: genres}
})

export default useGenres;