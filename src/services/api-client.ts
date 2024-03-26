import axios from "axios";

export interface FetchResponse<T> {
  count: number,
  results: T[]
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: "83122f516a194d4a89477cf065ca619b"
  }
})