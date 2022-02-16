import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Stopwatch from './pages/Stopwatch'
import Timer from './pages/Timer'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/clock-app/' component={Home} exact />
        <Route path='/clock-app/stopwatch' component={Stopwatch} exact />
        <Route path='/clock-app/timer' component={Timer} exact />
      </Switch>
    </BrowserRouter>
  );
}
export default App;