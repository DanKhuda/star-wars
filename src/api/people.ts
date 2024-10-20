import { PeopleResponse } from "../types/PeopleResponse";
import { client } from "../utils/fetchClient"

export const getPeople = (page: number) => {
  return client.get<PeopleResponse>(`/people?page=${page}`);
}
