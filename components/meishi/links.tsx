import React from 'react'

const Links: React.FC = () => {
  return (
    <div>
      <a
        href="https://cordx.net/"
        target="_blank"
        className="inline-block bg-transparent hover:bg-teal-600 text-teal-700 hover:text-white px-6 py-2 mx-4 my-2 border border-teal-600 rounded"
      >
        Portfolio
      </a>
      <a
        href="https://github.com/cordx56"
        target="_blank"
        className="inline-block bg-transparent hover:bg-gray-700 text-gray-700 hover:text-white px-6 py-2 mx-4 my-2 border border-gray-700 rounded"
      >
        GitHub
      </a>
    </div>
  )
}

export default Links
