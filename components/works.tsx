import React from "react";

export default function Works() {
  return (
    <div id="works">
      <h1 className="text-4xl font-light">Works</h1>
      <h2 className="text-3xl">Web</h2>
      <ul className="list-disc pl-6 pb-4">
        <li>
          <h3 className="text-2xl">
            <a
              href="https://tweetgen.cordx.net/"
              target="_blank"
              rel="noreferrer"
            >
              Tweet generator
            </a>
            <small> (2019-2020)</small>
          </h3>
          <p>Markov-chain text generator</p>
        </li>
      </ul>
      <h2 className="text-3xl">System, Library</h2>
      <ul className="list-disc pl-6 pb-4">
        <li>
          <h3 className="text-2xl">
            <a
              href="https://silang.cordx.net/"
              target="_blank"
              rel="noreferrer"
            >
              SILang
            </a>
            <small> (2019-2021)</small>
          </h3>
          <p>Simple Interpreter Language, silang interpreter implementation</p>
        </li>
        <li>
          <h3 className="text-2xl">
            <a href="https://slip.cordx.net/" target="_blank" rel="noreferrer">
              slip
            </a>
            <small> (2021)</small>
          </h3>
          <p>Small LIsP language compiler</p>
        </li>
        <li>
          <h3 className="text-2xl">
            <a
              href="https://digico.cordx.net/"
              target="_blank"
              rel="noreferrer"
            >
              digiCo NLP
            </a>
            <small> (2018-2019)</small>
          </h3>
          <p>デジクリ自然言語質問応答システム</p>
        </li>
      </ul>
      <h2 className="text-3xl">Slides, Others</h2>
      <ul className="list-disc pl-6 pb-4">
        <li>
          <h3 className="text-2xl">
            <a
              href="https://speakerdeck.com/cordx56/basic-lecture-of-git-and-github"
              target="_blank"
              rel="noreferrer"
            >
              Git/GitHub基礎講座
            </a>
            <small> (2018)</small>
          </h3>
          <p>
            Basic lecture of Git &amp; GitHub
            <br />
            デジクリGit/GitHub基礎講座
          </p>
        </li>
      </ul>
    </div>
  );
}
