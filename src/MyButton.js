import React from "react";

function MyButton({ children, onClick, ...props }) {
  const [startTransition, isPending] = React.useTransition({ timeoutMs: 1000 });
  return (
    <>
      <button
        {...props}
        onClick={e => {
          startTransition(() => onClick(e));
        }}
        disabled={isPending}
      >
        {children}
      </button>
      {isPending ? <div>loading ...</div> : null}
    </>
  );
}

export default MyButton;
