import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-regular-svg-icons'

export default class Profile extends React.Component {
  render() {
    return (
      <div id="profile">
        <h1 className="text-4xl font-light">Profile</h1>
        <table className="table-auto w-full">
          <tbody>
            <tr className="border-b">
              <th className="px-2 py-2">
                <FontAwesomeIcon icon={faTools} className="text-3xl" />
              </th>
              <td className="px-2 py-2">
                <p>Programming lang.</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Python</li>
                  <li>C++</li>
                </ul>
                <p>Environment</p>
                <ul className="list-disc pl-6">
                  <li>
                    <p>Arch Linux</p>
                    <ul className="list-disc pl-6">
                      <li>zsh</li>
                      <li>byobu(tmux)</li>
                      <li>vim</li>
                    </ul>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="border-b">
              <th colSpan={99} className="text-center px-2 py-2">
                <FontAwesomeIcon icon={faIdCard} className="text-3xl" />
              </th>
            </tr>
            <tr className="border-b">
              <td className="px-2 py-2">2017-</td>
              <td className="px-2 py-2">Shibaura Institute of Technology, Information Science and Engineering</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
