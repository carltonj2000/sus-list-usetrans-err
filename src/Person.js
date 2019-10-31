import React from "react";

function App({ resource }) {
  const person = resource.person.read();
  return <p>{person.name.first}</p>;
}

export default App;
