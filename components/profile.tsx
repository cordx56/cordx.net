import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-regular-svg-icons'

export default function Profile() {
  return (
    <div id="profile">
      <h1 className="text-4xl font-light">Profile</h1>
      <table className="table-auto w-full">
        <tbody>
          <tr className="border-b">
            <td colSpan={99} className="px-2 py-2">
              <h2 className="text-3xl">Affiliation</h2>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-2 py-2">2017 - 2021</td>
            <td className="px-2 py-2">Shibaura Institute of Technology, Information Science and Engineering (Bachelor of Engineering)</td>
          </tr>
          <tr className="border-b">
            <td className="px-2 py-2">2021 - Present</td>
            <td className="px-2 py-2">Shibaura Institute of Technology, Electrical Engineering and Computer Science</td>
          </tr>

          <tr className="border-b">
            <td colSpan={99} className="px-2 py-2">
              <h2 className="text-3xl">Experience</h2>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-2 py-2">2020/08</td>
            <td className="px-2 py-2">
              <a href="https://cordx56.hatenablog.com/entry/2020/08/31/104330" target="_blank">
                Hatena Summer Internship
              </a>
              <small> (Golang/K8s)</small>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-2 py-2">2020/08-</td>
            <td className="px-2 py-2">
              Gaiax Internship
              <small> (Django/React/TypeScript/Vue.js/AWS)</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
