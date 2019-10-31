import React from "react";

function PostResource({ resource }) {
  const data = resource.read();
  if (!data) return null;
  return <div>Post Result: {JSON.stringify(data)}</div>;
}

export default PostResource;
