import GameDetails from "../entities/GameDetails";
import APIClient from "./api-client";

export default new APIClient<GameDetails>('/games');