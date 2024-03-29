import { Game } from "../entities/Game";
import APIClient, { FetchResponse } from "./api-client";

export default new APIClient<Game>('/games');