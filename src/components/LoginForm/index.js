import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {id: '', pin: '', isError: false, errorMsg: ''}

  getUserEnteredId = event => {
    this.setState({id: event.target.value})
  }

  getUserEnteredPassword = event => {
    this.setState({pin: event.target.value})
  }

  getAuthentication = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  getFailure = errorMsg => {
    const {isError} = this.state
    this.setState({errorMsg, isError: !isError})
  }

  submitUserEntered = async event => {
    event.preventDefault()
    const {id, pin} = this.state
    const userDetails = {id, pin}
    console.log(userDetails)
    const url = 'https://apis.ccbp.in/ebank/login'

    const options = {
      body: JSON.stringify(userDetails),
      method: 'POST',
    }

    console.log(options)

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.jwt_token)
    if (response.ok === true) {
      this.getAuthentication(data.jwt_token)
    } else {
      this.getFailure(data.error_msg)
    }
  }

  render() {
    const {id, pin, isError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-form-bg-container">
        <div className="login-main-container">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="website-login"
            />
          </div>
          <form className="login-form" onSubmit={this.submitUserEntered}>
            <h1 className="heading">Welcome Back!</h1>
            <div className="input-container">
              <label className="label" htmlFor="text">
                User ID
              </label>
              <input
                className="input-bar"
                type="text"
                id="text"
                value={id}
                onChange={this.getUserEnteredId}
              />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="password">
                PIN
              </label>
              <input
                type="password"
                id="password"
                className="input-bar"
                value={pin}
                onChange={this.getUserEnteredPassword}
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            {isError && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
