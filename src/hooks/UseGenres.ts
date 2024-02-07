import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface GenreResponse {
  count: number,
  results: Genre[]
}

export interface Genre {
  id: number,
  name: string,
  slug: string,
  games_count: number,
  image_background: string
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<GenreResponse>("/genres",  { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      })
      return () => controller.abort();
    } ,[]);

    return { genres, error, isLoading };
};

export default useGenres;