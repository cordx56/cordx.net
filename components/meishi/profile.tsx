import React from 'react'
import axios from 'axios'

export default class Profile extends React.Component {
  state = {
    ghdata: {
      name: '',
      login: '',
    }
  }
  constructor(props) {
    super(props)
    this.fetchProfile()
  }
  fetchProfile() {
    axios.get('https://api.github.com/users/cordx56')
      .then((response) => {
        this.setState({ ghdata: response.data })
      })
      .catch((error) => {
        window.alert(error)
      })
  }
  render() {
    return (
      <div>
        <h1 className="text-4xl font-light">{ this.state.ghdata.name }</h1>
        <h5 className="text-lg text-gray-700">
          @{ this.state.ghdata.login }
        </h5>
      </div>
    )
  }
}
