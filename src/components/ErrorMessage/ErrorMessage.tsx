import React from "react";
import styles from "./ErrorMessage.module.scss";

interface Props {
  message: string;
}

export const ErrorMessage: React.FC<Props> = ({
  message,
}) => {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>{message}</p>
    </div>
  );
};
