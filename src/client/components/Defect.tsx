import React from "react";
import { Defect } from "./model";
import SingleDefect from "./SingleDefect";
import { Link } from "react-router-dom";

type Props = {
  defects?: Defect[];
  setDefects?: React.Dispatch<React.SetStateAction<Defect[]>>;
};

function Defects({ defects }: Props) {
  return (
    <div>
      {defects?.length &&
        defects.map((defect) => (
          <div key={defect.id}>
            <Link to={`/defects/${defect.id}`}>
              <SingleDefect defect={defect} />
            </Link>
            <br />
          </div>
        ))}
    </div>
  );
}

export default Defects;
