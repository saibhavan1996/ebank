import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const clickToLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }

  return (
    <nav className="nav-header">
      <div>
        <Link to="/">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
          />
        </Link>
      </div>
      <button type="button" className="logout-button" onClick={clickToLogOut}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
