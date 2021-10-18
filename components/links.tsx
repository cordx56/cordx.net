import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faKeybase } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Links() {
  return (
    <div id="links">
      <h1 className="text-4xl font-light">Links</h1>
      <h4 className="text-xl">
        <a href="https://github.com/cordx56" target="_blank">
          <FontAwesomeIcon icon={faGithub} /> @cordx56
        </a>
      </h4>
      <h4 className="text-xl">
        <a href="https://keybase.io/cordx56" target="_blank">
          <FontAwesomeIcon icon={faKeybase} /> cordx56
        </a>
      </h4>
      <h4 className="text-xl">
        <a href="mailto:cordx56@cordx.net" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} /> cordx56@cordx.net
        </a>
      </h4>
    </div>
  );
}
