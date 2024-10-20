import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";

interface BreadcrumbProps {
  characterName: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ characterName }) => {
  return (
    <nav className={styles.breadcrumb}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <span className={styles.separator}> → </span>
      <span className={styles.characterName}>{characterName}</span>
    </nav>
  );
};

export default Breadcrumb;
