import {Route,Routes} from 'react-router-dom'
import TypeQuestHomepage from './components/HomePage.jsx'
import About from './components/About.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import PlayGround from './components/PlayGround.jsx'
function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<TypeQuestHomepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/play' element={<PlayGround />} />
      </Routes>
    </>
  )
}

export default App
