import React, {useContext}  from 'react'
import { ScoreContext } from '../store/scoreContext'
import Guesser from './Guesser'
import Resetlives from './Resetlives'

const GuessingPage = () => {
    const {store} = useContext(ScoreContext)
  return (
        <div className='container w-75'>
            {store.lives === 0 ? <Resetlives/> : <Guesser />}
            <p className="pt-3"> by Shobande James </p>
            </div>
  )
}

export default GuessingPage