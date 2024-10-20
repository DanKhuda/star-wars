import { useEffect, useState } from "react";
import { getPeople } from "../../api/people";
import { Person } from "../../types/Person";
import { PeopleResponse } from "../../types/PeopleResponse";
import { PeopleList } from "../../components/PeopleList";
import { Loader } from "../../components/Loader";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination";
import { PageTitle } from "../../components/PageTitle";
import { ErrorMessages } from "../../constants/ErrorMessages";
import styles from "./HomePage.module.scss";
import { ErrorMessage } from "../../components/ErrorMessage";

export const HomePage = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorMessages | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const shouldShowPagination = people.length > 0;

  useEffect(() => {
    setIsLoading(true);
    getPeople(currentPage)
      .then((response: PeopleResponse) => {
        setPeople(response.results);
        setTotalCount(response.count);
      })
      .catch(() => {
        setError(ErrorMessages.LoadPeople);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: String(page) });
  };

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className={styles.homePageContainer}>
      <PageTitle title="Characters" className={styles.homePageTitle} />

      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.peopleListWrapper}>
          <PeopleList people={people} />
        </div>
      )}

      {shouldShowPagination && (
        <div className={styles.paginationWrapper}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};
