import { MovieResponse } from "../types/MovieResponse";
import { client } from "../utils/fetchClient"

export const getMoviesByIds = (filmIds: number[]) => {
  const idsParam = filmIds.join(',');
  return client.get<MovieResponse>(`/films/?id__in=${idsParam}`);
}
