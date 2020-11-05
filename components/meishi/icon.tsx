import React from 'react'
import QRcode from 'qrcode.react'

interface State {
  qrcode: boolean
}

export default class Icon extends React.Component<{}, State> {
  constructor(props) {
    super(props)
    this.toggleQR = this.toggleQR.bind(this)
  }
  state = {
    qrcode: false
  }
  toggleQR() {
    this.setState({ qrcode: !this.state.qrcode })
  }
  render() {
    if (this.state.qrcode) {
      return (
        <QRcode className="mx-auto" value="https://cordx.net/" onClick={this.toggleQR} />
      )
    } else {
      return (
        <img className="mx-auto" src="https://github.com/cordx56.png" onClick={this.toggleQR} />
      )
    }
  }
}
