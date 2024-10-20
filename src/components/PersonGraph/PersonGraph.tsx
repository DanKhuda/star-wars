import React from "react";
import { Person } from "../../types/Person";
import { ReactFlow, Background, Controls, MiniMap } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Movie } from "../../types/Movie";
import { Starship } from "../../types/Starship";
import { createEdge, createNode } from "../../utils/graphElements";
import { calculatePosition } from "../../utils/calculatePosition";
import { NodeDetails } from "../NodeDetails";
import styles from "./PersonGraph.module.scss";

interface Props {
  person: Person;
  moviesList: Movie[];
  starshipsList: Starship[];
}

export const PersonGraph: React.FC<Props> = ({
  person,
  moviesList,
  starshipsList,
}) => {
  const { id, films } = person;

  const personNode = createNode(
    `person-${id}`,
    <NodeDetails title="Character" data={person.name} />,
    calculatePosition(0, 1, 20)
  );

  const movieNodes = moviesList.map((movie, index) =>
    createNode(
      `movie-${movie.id}`,
      <NodeDetails title="Movie" data={movie.title} />,
      calculatePosition(index, moviesList.length, 250)
    )
  );

  const starshipNodes = starshipsList.map((starship, index) =>
    createNode(
      `starship-${starship.id}`,
      <NodeDetails title="Starship" data={starship.name} />,
      calculatePosition(index, starshipsList.length, 500)
    )
  );

  const personEdge = moviesList.map((movie) =>
    createEdge(
      `person-${id}-movie-${movie.id}`,
      `person-${id}`,
      `movie-${movie.id}`
    )
  );

  const moviesEdge = starshipsList.flatMap((starship) =>
    starship.films
      .filter((filmId) => films.includes(Number(filmId)))
      .map((filmId) =>
        createEdge(
          `movie-${filmId}-starship-${starship.id}`,
          `movie-${filmId}`,
          `starship-${starship.id}`
        )
      )
  );

  const nodes = [personNode, ...movieNodes, ...starshipNodes];

  const edges = [...personEdge, ...moviesEdge];

  return (
    <div className={styles.graphWrapper}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};
