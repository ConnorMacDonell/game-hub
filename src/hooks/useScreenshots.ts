import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";

const useScreenshots = (gameSlug: string) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameSlug}/screenshots`);

  return useQuery({
    queryKey: ['screenshots', gameSlug],
    queryFn: () => apiClient.getAll()
  })
}

export default useScreenshots;