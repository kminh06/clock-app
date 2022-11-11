import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Stopwatch from './pages/Stopwatch'
import Timer from './pages/Timer'

function App() {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/stopwatch/' component={Stopwatch} />
      <Route path='/timer/' component={Timer} />
    </Switch>
  );
}
export default App;