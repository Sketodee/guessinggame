import React, { useState, useContext } from 'react'
import { ScoreContext } from '../store/scoreContext'

const Guesser = () => {
    const { increaseScore, decreaseLives } = useContext(ScoreContext)

    const [number, setNumber] = useState("")
    const [lower, setLower] = useState(0)
    const [upper, setUpper] = useState(2)

    const random = (min, max) => {
        return (Math.floor(Math.random() * (1 + max - min)) + min)
    }

    const handleSubmit = () => {
        const guessed = (random(lower, upper))
        console.log(guessed,number)
        if (guessed === number) {
            increaseScore()
        } else {
            decreaseLives()
        }
        setNumber("")
    }

    return (
        <div className="pt-5">
            <h3> Guess a number between {lower} and {upper} </h3>
            <div className='pb-3'>
                <input type="number" value={number} className='form-control' onChange={(e) => setNumber(+e.target.value)} />
            </div>
            <div className='pb-3'>
                <button disabled={number===""}className='btn text-white' style={{ backgroundColor: "#7a43b6" }} onClick={handleSubmit}> Guess The Number </button>
            </div>
                <div className="mb-3">
                    <label htmlFor="lower-limit" className="form-label"> Lower Limit</label>
                    <input type="number" className="form-control" onChange={(e) => setLower(+e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="upper-limit" className="form-label">Upper Limit</label>
                    <input type="number" className="form-control" onChange={(e) => setUpper(+e.target.value)}/>
                </div>

            {/* <div><label htmlFor="lower limit"><input type={number} onChange={(e) => setLower(+e.target.value)} /> lower limit  </label></div>
            <div><label htmlFor="lower limit"> <input type={number} onChange={(e) => setUpper(+e.target.value)} /> upper limit </label></div> */}
        </div>
    )
}

export default Guesser