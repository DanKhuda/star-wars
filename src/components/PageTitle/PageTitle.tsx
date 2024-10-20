import React from "react";
import classNames from "classnames";
import styles from './PageTitle.module.scss';

interface Props {
  title: string;
  className?: string;
}

export const PageTitle: React.FC<Props> = ({ title, className }) => {
  return (
    <h2 className={classNames(styles.defaultTitle, className)}>{title}</h2>
  );
};
