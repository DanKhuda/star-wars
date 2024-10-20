import React from "react";
import { Person } from "../../types/Person";
import { PersonItem } from "../PersonItem";
import styles from './PeopleList.module.scss';

interface Props {
  people: Person[];
}

export const PeopleList: React.FC<Props> = ({ people }) => {
  return (
    <ul className={styles.peopleList}>
      {people.map((person) => (<PersonItem key={person.id} person={person} />))}
    </ul>
  );
};
