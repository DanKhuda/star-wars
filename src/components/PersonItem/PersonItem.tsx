import React from "react";
import { PersonPreview } from "../../types/Person";
import { Link } from "react-router-dom";
import styles from "./PersonItem.module.scss";
import { Image } from "../Image";

interface Props {
  person: PersonPreview;
}

export const PersonItem: React.FC<Props> = ({ person }) => {
  const { id, name } = person;
  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

  return (
    <li className={styles.personItem}>
      <Link to={`person/${id}`} className={styles.personLink}>
        <Image src={imageUrl} alt={name} />
        <span className={styles.personTitle}>{name}</span>
      </Link>
    </li>
  );
};
