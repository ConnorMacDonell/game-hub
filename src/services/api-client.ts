import axios, { AxiosRequestConfig } from "axios";
import { Platform } from "../entities/Platform";
import { GameDetails } from "../entities/GameDetails";

export interface FetchResponse<T> {
  count: number,
  next: string | null;
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: "83122f516a194d4a89477cf065ca619b"
  }
})

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
  }

  get = (id: string | number) => {
    return axiosInstance.get<T>(`${this.endpoint}/${id}`).then(res => res.data)
  }

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
  }
}

export default APIClient;