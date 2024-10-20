import React from "react";
import classNames from "classnames";
import styles from "./Image.module.scss";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export const Image: React.FC<Props> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames(styles.defaultImage, className)}
    />
  );
};
