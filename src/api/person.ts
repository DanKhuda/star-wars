import { Person } from "../types/Person";
import { client } from "../utils/fetchClient"

export const getPersonById = (id: string) => {
  return client.get<Person>(`/people/${id}`);
}
