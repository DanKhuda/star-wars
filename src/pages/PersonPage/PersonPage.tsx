import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Person } from "../../types/Person";
import { getPersonById } from "../../api/person";
import { PersonGraph } from "../../components/PersonGraph";
import { Loader } from "../../components/Loader";
import { getMoviesByIds } from "../../api/movies";
import { getStarshipsByFilmIds } from "../../api/starships";
import { Movie } from "../../types/Movie";
import { Starship } from "../../types/Starship";
import { ErrorMessages } from "../../constants/ErrorMessages";
import { Breadcrumb } from "../../components/Breadcrumb";
import { ErrorMessage } from "../../components/ErrorMessage";

export const PersonPage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState<Person | null>(null);
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [starshipsList, setStarshipsList] = useState<Starship[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorMessages | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setIsLoading(true);
        try {
          const personData = await getPersonById(id);
          setPerson(personData);

          const [movieResponse, starshipResponse] = await Promise.all([
            getMoviesByIds(personData.films),
            getStarshipsByFilmIds(personData.films, personData.id),
          ]);
          setMoviesList(movieResponse.results);
          setStarshipsList(starshipResponse.results);
        } catch {
          setError(ErrorMessages.LoadData);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div>
      {person && <Breadcrumb characterName={person.name} />}
      {isLoading ? (
        <Loader />
      ) : (
        person && (
          <PersonGraph
            person={person}
            moviesList={moviesList}
            starshipsList={starshipsList}
          />
        )
      )}
    </div>
  );
};
