import './App.css';
import ScoreContextProvider from './store/scoreContext';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import GuessingPage from './components/GuessingPage';


function App() {
  return (
    <ScoreContextProvider>
      <div className="App">
        <Header/>
        <GuessingPage/>
    </div>
    </ScoreContextProvider>
  );
}

export default App;
