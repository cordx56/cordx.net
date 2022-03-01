import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faKeybase } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Wishlists from "./wishlists";

export default function Links() {
  return (
    <div id="links">
      <h1 className="text-4xl font-light">Links</h1>
      <h4 className="text-xl">
        <a href="https://github.com/cordx56" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} /> @cordx56
        </a>
      </h4>
      <h4 className="text-xl">
        <a href="https://keybase.io/cordx56" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faKeybase} /> cordx56
        </a>
      </h4>
      <h4 className="text-xl">
        <a href="mailto:cordx56@cordx.net" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} /> cordx56@cordx.net
        </a>
      </h4>
      <h2 className="text-2xl">Wishlists</h2>
      <Wishlists />
    </div>
  );
}
