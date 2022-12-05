import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route path="/bad-path" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
