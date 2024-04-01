import Platform from "../entities/Platform";
import APIClient, { FetchResponse } from "./api-client";

export default new APIClient<Platform>('/platforms');