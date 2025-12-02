import { Route, Routes } from 'react-router-dom'
import './App.css'
import ContactContainer from './Components/ContactsContainer/ContactContainer'
import HomePage from './pages/HomePage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
