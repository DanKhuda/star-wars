import { Movie } from "./Movie";

export interface MovieResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Movie[];
}
