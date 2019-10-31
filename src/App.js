import React, { Suspense, SuspenseList } from "react";

import Num from "./Num";
import Person from "./Person";
import PostResource from "./PostResource";
import { createResource, wrapPromise } from "./PersonApi";
import { ErrorBoundary } from "./ErrorBoundry";
import MyButton from "./MyButton";

const initialResource = createResource();

function App() {
  const [resource, resourceSet] = React.useState(initialResource);
  const [postResource, postResourceSet] = React.useState({
    read() {
      return null;
    }
  });

  return (
    <div>
      <ErrorBoundary>
        {/* <SuspenseList tail="collapse" revealOrder="forwards"> */}
        <SuspenseList revealOrder="together">
          <Suspense fallback={<h1>Loading Person ...</h1>}>
            <Person resource={resource} />
            <PostResource resource={postResource} />
          </Suspense>
          <Suspense fallback={<h1>Loading Number...</h1>}>
            <Num resource={resource} />
          </Suspense>
        </SuspenseList>
      </ErrorBoundary>
      <button
        onClick={() => {
          const p = fetch("https://enzzj1ffa9v4.x.pipedream.net/", {
            method: "post",
            body: JSON.stringify({ hello: "world" })
          })
            .then(x => x.json())
            .then(
              res => console.log("got response", res) || res,
              e => console.log("error prf", e)
            );
          postResourceSet(wrapPromise(p));
        }}
      >
        Call Post Request
      </button>
      <MyButton onClick={() => resourceSet(createResource())}>
        Refresh Data
      </MyButton>
    </div>
  );
}

export default App;
