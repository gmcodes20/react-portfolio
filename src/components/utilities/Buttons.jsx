import { Fragment } from "react";

export const LinkBtn = ({ type, name, to }) => {
  if (type === "primary") {
    return (
      <Fragment>
        <a
          style={{
            transition:
              "background 0.2s cubic-bezier(.34,.69,.89,.61), color 0.6s, border .2s cubic-bezier(.01,.16,.98,.01)",
          }}
          href={to}
          className=" block nbtn text-center border border-cyan-700  text-white bg-cyan-700   px-6 py-2 rounded-lg hover:bg-transparent hover:text-cyan-700"
        >
          {name}
        </a>
      </Fragment>
    );
  } else if (type === "secondary") {
    return (
      <Fragment>
        <a
          style={{
            transition:
              "background 0.2s cubic-bezier(.34,.69,.89,.61), color 0.6s, border .2s cubic-bezier(.01,.16,.98,.01)",
          }}
          href={to}
          className=" block btn text-center bg-transparent border text-cyan-700  border-cyan-700 px-6 py-2 rounded-lg hover:transform hover:bg-cyan-600 hover:text-white  "
        >
          {name}
        </a>
      </Fragment>
    );
  }
};
