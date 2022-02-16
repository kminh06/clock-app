import StopwatchImg from './media/stopwatch.png'
import TimerImg from './media/timer.png'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'

function Home() {
  return (
    <div id="home">
      <div id="welcome-message">Welcome to Clock App!</div>
      <div id="link-container">
        <Link to='/clock-app/stopwatch/'><div className="app-link">
          <img className="thumbnail" src={StopwatchImg} alt="stopwatch" />
          <h1>stopwatch</h1>
        </div></Link>
        <div class="spacer"></div>
        <Link to='/clock-app/timer/'><div className="app-link">
          <img className="thumbnail" src={TimerImg} alt="timer" />
          <h1>timer</h1>
        </div></Link>
      </div>
      <div id="filler"></div>
      <Footer />
    </div>
  )
}

export default Home;