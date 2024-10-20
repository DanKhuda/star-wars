import React from "react";

interface Props {
  title: string;
  data: string;
}

export const NodeDetails: React.FC<Props> = ({ title, data }) => {

  return (
    <>
      <h3>{title}</h3>
      <p>{data}</p>
    </>
  );
};
