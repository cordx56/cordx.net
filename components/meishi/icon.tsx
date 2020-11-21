import React, { useState } from 'react'
import QRcode from 'qrcode.react'

interface State {
  qrcode: boolean
}

const Icon: React.FC = () => {
  const [qrcode, setQrcode] = useState(false)
  const toggleQR = () => {
    setQrcode(!qrcode)
  }
  if (qrcode) {
    return (
      <QRcode className="mx-auto" value="https://cordx.net/" onClick={toggleQR} />
    )
  } else {
    return (
      <img className="mx-auto" src="https://github.com/cordx56.png" onClick={toggleQR} />
    )
  }
}

export default Icon
