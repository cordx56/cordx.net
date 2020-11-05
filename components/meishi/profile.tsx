import React from 'react'
import axios from 'axios'

interface State {
  name: string,
  login: string,
}

export default class Profile extends React.Component<{}, State> {
  state = {
    name: '',
    login: '',
  }
  constructor(props) {
    super(props)
    this.fetchProfile()
  }
  fetchProfile() {
    axios.get('https://api.github.com/users/cordx56')
      .then((response) => {
        this.setState({
          name: response.data.name,
          login: response.data.login,
        })
      })
      .catch((error) => {
        window.alert(error)
      })
  }
  render() {
    return (
      <div>
        <h1 className="text-4xl font-light">{ this.state.name }</h1>
        <h5 className="text-lg text-gray-700">
          @{ this.state.login }
        </h5>
      </div>
    )
  }
}
