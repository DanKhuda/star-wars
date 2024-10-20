import { StarshipResponse } from "../types/StarshipResponse";
import { client } from "../utils/fetchClient";

export const getStarshipsByFilmIds = (filmIds: number[], personId: number) => {
  const filmIdsParam = filmIds.join(',');
  return client.get<StarshipResponse>(`/starships/?films__in=${filmIdsParam}&pilots__in=${personId}`);
}