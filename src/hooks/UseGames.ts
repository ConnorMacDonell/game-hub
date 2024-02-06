import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import Game from "../models/game";

interface GamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<GamesResponse>("/games", {signal: controller.signal})
      .then((res) => {
        setGames(res.data.results)
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      });
    
    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
}

export default useGames;