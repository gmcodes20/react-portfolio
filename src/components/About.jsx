import { Fragment } from "react";

function About() {
  return (
    <Fragment>
      <section className=" py-10 bg-slate-100" id="about">
        <div style={{ maxWidth: "90%" }} className=" mx-auto    ">
          <h3 className="  text-center text-xl text-cyan-700 font-bold relative before:content-[''] before:w-8  before:absolute  before:top-8   before:inline-block before:h-1 before:bg-red-900 before:text-center">
            About m<div className=""></div>
          </h3>
        </div>
      </section>
    </Fragment>
  );
}

export default About;
