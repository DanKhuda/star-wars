import React from "react";
import { Button } from "../Button";
import styles from './Pagination.module.scss';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  const changePage = (page: number) => {
    if (page > 0 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.pagination}>
      <Button
        label="<"
        isDisabled={isFirstPage}
        onClick={() => changePage(prevPage)}
      />
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <Button
            key={pageNumber}
            label={String(pageNumber)}
            isActive={currentPage === pageNumber}
            onClick={() => changePage(pageNumber)}
          />
        );
      })}
      <Button
        label=">"
        isDisabled={currentPage === totalPages}
        onClick={() => changePage(nextPage)}
      />
    </div>
  );
};
