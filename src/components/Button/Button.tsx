import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface Props {
  label: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({
  label,
  isActive = false,
  isDisabled = false,
  onClick,
}) => {
  return (
    <button
      className={classNames(styles.button, isActive && styles.isActive)}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};
