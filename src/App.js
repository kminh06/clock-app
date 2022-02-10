import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Stopwatch from './pages/Stopwatch'
import Timer from './pages/Timer'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/stopwatch' component={Stopwatch} />
        <Route path='/timer' component={Timer} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;