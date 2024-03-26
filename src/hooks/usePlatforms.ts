import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import platformService from "../services/platformService";



const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () => platformService.getAll(),
  staleTime: 7 * 24 * 60 * 60 * 1000, //1week
})

export default usePlatforms;