import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ChatPage from './pages/ChatPage/ChatPage'
import ContactListContextProvider from './Context/ContactListContext'
import ContactDetailContextProvider from './Context/ContactDetailsContext'


function App() {

  return (
    <>
      <Routes>
        <Route element={<ContactListContextProvider/>}>
          <Route path='/' element={<HomePage />} />

          <Route path='/chat/:id' element={<ContactDetailContextProvider />}>
            <Route path='/chat/:id/messages' element={<ChatPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
