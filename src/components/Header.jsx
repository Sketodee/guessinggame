import React, {useContext} from 'react'
import { ScoreContext } from '../store/scoreContext'

const Header = () => {
    const {store} = useContext(ScoreContext)
  return (
<nav className="navbar navbar-light text-white" style={{backgroundColor: "#7a43b6"}}>
  <div className="container-fluid">
    <p className=" text-white display-4">Guesser</p>
    <p> You have {store.lives} lives left</p>
    <p className='display-6'>Score: {store.score} </p>
  </div>
</nav>
  )
}

export default Header