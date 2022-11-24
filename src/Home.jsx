import React from "react";
import { LinkBtn } from "./components/utilities/Buttons";
import About from "./components/About";
import aboutImg from "./assets/imgg.jpg";

function Home() {
  return (
    <main className=" bg-white pt-8">
      <section
        style={{ maxWidth: "90%" }}
        className="flex flex-col md:flex-row gap-10 justify-between items-center mx-auto pb-10"
        id="home"
      >
        <div className="flex flex-col   items-center md:items-start">
          <p className="py-2 text-lg">Hi there </p>
          <p className="py2 text-lg">
            I am glad you are here and it is my pleasure to meet you
          </p>
          <p className="pt-2 text-lg">I&#39;m </p>
          <h1 className=" py-2 font-extrabold uppercase tracking-wider  text-blue-900 text-left text-4xl">
            Godwin Martins
          </h1>
          <h2
            style={{ maxWidth: "45ch" }}
            className=" py-2 text-center text-red-900 text-2xl md:text-left "
          >
            A frontend developer interested in creating intuitive user interface
            that are both responsive and functional.
          </h2>
          <p className="mt-4 py-2 text-lg">I am happy to help</p>

          <div className="flex gap-4 pt-2">
            <LinkBtn type="primary" name="Resume" to={"#"} />
            <LinkBtn type="secondary" name="Contact Me" to={"#"} />
          </div>
        </div>

        <div
          style={{ maxWidth: "250px" }}
          className="rounded-full flex-shrink aspect-1 "
        >
          <img
            className="rounded-full aspect-1"
            src={aboutImg}
            alt="Martins standing wearing suit"
          />
          {/* <img src={aboutImg} alt=" Martins standing" /> */}
        </div>
      </section>

      <About />
    </main>
  );
}

export default Home;
