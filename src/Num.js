import React from "react";

function Num({ resource }) {
  const num = resource.num.read();
  return <div>Random number: {num}</div>;
}

export default Num;
