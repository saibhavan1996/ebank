import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        className="error-msg"
        alt="not found"
      />
      <h2 className="oops">Page Not Found</h2>
      <p className="error-des">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)
export default NotFound
