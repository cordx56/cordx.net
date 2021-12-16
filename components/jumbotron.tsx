import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Jumbotron() {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-2">
      <div className="container flex flex-wrap mx-auto">
        <div className="w-full sm:w-1/4">
          {/* <img className="mx-auto" src="https://github.com/cordx56.png" /> */}
        </div>
        <div className="w-full text-center sm:w-3/4 sm:py-4 sm:text-left">
          <h1 className="text-5xl">@cordx56</h1>
          <ul className="flex justify-center sm:justify-start">
            <li className="mr-8">
              <h3 className="text-2xl">
                <a
                  className="text-teal-500 hover:text-teal-700"
                  href="https://github.com/cordx56"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              </h3>
            </li>
            <li>
              <h3 className="text-2xl">
                <a
                  className="text-teal-500 hover:text-teal-700"
                  href="mailto:cordx56@cordx.net"
                >
                  <FontAwesomeIcon icon={faEnvelope} /> email
                </a>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
