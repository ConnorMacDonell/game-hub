import APIClient, { FetchResponse } from "./api-client";

export interface Platform {
  id: number,
  slug: string,
  name: string
}

export default new APIClient<Platform>('/platforms');