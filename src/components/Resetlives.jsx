import React, {useContext} from 'react'
import { ScoreContext } from '../store/scoreContext'

const Resetlives = () => {
    const {reset} = useContext(ScoreContext)
  return (
    <div className='py-5'>
        <button className='btn text-white' style={{ backgroundColor: "#7a43b6" }} onClick={reset}> PLAY AGAIN </button>
        </div>
  )
}

export default Resetlives