import { createContext, useState } from "react";

export const ScoreContext = createContext()


const ScoreContextProvider = ({children}) => {
    const [store, setStore] = useState({
        score: 0, 
        lives: 10
    })


    const increaseScore = () => {
        setStore({...store, score: store.score+1 })
    }
    const decreaseLives = () => {
        setStore({...store, lives: store.lives - 1 })
    }
    const reset = () => {
        setStore({...store, score: 0 , lives: 10 })

    }


  return (
    <ScoreContext.Provider value={
        {store, increaseScore, decreaseLives, reset}
        }> 
        {children}
    </ScoreContext.Provider>
  )
}

export default ScoreContextProvider