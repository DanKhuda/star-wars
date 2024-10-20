import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.message}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className={styles.homeLink}>
        Go to Home
      </Link>
      <img
        src="https://starwars-visualguide.com/assets/img/species/35.jpg"
        alt="Not Found"
        className={styles.image}
      />
    </div>
  );
};
