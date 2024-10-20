import { Link } from "react-router-dom";
import { Image } from "../Image";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link to="/">
      <Image
        src={`${process.env.PUBLIC_URL}/logo.png`}
        alt="logo"
        className={styles.logo}
      />
    </Link>
  );
};
