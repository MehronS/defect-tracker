import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

function Bug({}: Props) {
  const { id } = useParams();
  return <div>{id ? id : `No Bug Id`}</div>;
}

export default Bug;
