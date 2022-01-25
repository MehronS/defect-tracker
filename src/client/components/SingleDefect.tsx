import React from "react";
import { useParams } from "react-router-dom";
import { Defect } from "./model";

type Props = {
  defect?: Defect;
};

function SingleDefect({ defect }: Props) {
  const { id } = useParams();

  if (id) return <p>{id}</p>;

  return (
    <div>
      <p>Name: {defect?.name}</p>
      <p>Type: {defect?.type}</p>
      <p>Severity: {defect?.severity}</p>
    </div>
  );
}

export default SingleDefect;
