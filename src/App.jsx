import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ChatPage from './pages/ChatPage/ChatPage'
import ContactListContextProvider from './Context/ContactListContext'


function App() {

  return (
    <>
      <Routes>
        <Route element={<ContactListContextProvider/>}>
          <Route path='/' element={<HomePage />} />
          <Route path='/chat/:id' element={<ChatPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
