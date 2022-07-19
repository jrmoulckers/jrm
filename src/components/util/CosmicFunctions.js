import { Fragment } from "react";

export function getLineDelineated(message) {
  if (Array.isArray(message)) {
    return (
      <Fragment>
        {message.map((line) => (
          <p>{line}</p>
        ))}
      </Fragment>
    );
  }
  return message;
}
