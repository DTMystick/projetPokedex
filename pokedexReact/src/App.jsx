import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ListePokemon from './components/ListePokemon'
import Tarsal from './components/Tarsal'
import Kirlia from './components/Kirlia'
import Gardevoir from './components/Gardevoir'
import Gallame from './components/Gallame'
import Contact from './components/Contact'
import DetailsPoke from './components/DetailsPoke'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListePokemon />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/tarsal' element={<Tarsal/>}/>
        <Route path='/kirlia' element={<Kirlia/>}/>
        <Route path='/gardevoir' element={<Gardevoir/>}/>
        <Route path='/gallame' element={<Gallame/>}/>
        <Route path='/pokemon/:id' element={<DetailsPoke/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
