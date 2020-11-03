import React from 'react';

export default class Works extends React.Component {
  render() {
    return (
      <div id="works">
        <h1 className="text-4xl font-light">Works</h1>
        <h2 className="text-3xl">Web</h2>
        <ul className="list-disc pl-6 pb-4">
          <li>
            <h3 className="text-2xl">
              <a href="http://hongomc.net/" target="_blank">hongomc.net</a>
              <small> (2014-2016)</small>
            </h3>
            <p>Hongo Microcomputer Club webpage</p>
          </li>
          <li>
            <h3 className="text-2xl">
              <a href="https://markov.cordx.net/" target="_blank">Tweet generator</a>
              <small> (2019)</small>
            </h3>
            <p>Markov-chain text generator</p>
          </li>
        </ul>
        <h2 className="text-3xl">System, Library</h2>
        <ul className="list-disc pl-6 pb-4">
          <li>
            <h3 className="text-2xl">
              <a href="https://silang.cordx.net/" target="_blank">SILang</a>
              <small> (2019)</small>
            </h3>
            <p>Simple Interpreter Language, silang interpreter implementation</p>
          </li>
          <li>
            <h3 className="text-2xl">
              <a href="https://digico.cordx.net/" target="_blank">
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
              <a href="https://speakerdeck.com/cordx56/basic-lecture-of-git-and-github" target="_blank">
                Git/GitHub基礎講座
              </a>
              <small> (2018)</small>
            </h3>
            <p>Basic lecture of Git &amp; GitHub<br />デジクリGit/GitHub基礎講座</p>
          </li>
        </ul>
      </div>
    )
  }
}
