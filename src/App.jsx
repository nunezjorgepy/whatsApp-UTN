import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ChatPage from './pages/ChatPage/ChatPage'
import ContactListContextProvider from './Context/ContactListContext'
import ContactDetailContextProvider from './Context/ContactDetailsContext'
import MessageContextProvider from './Context/MessageContext'


function App() {

  return (
    <>
      <Routes>
        <Route element={<ContactListContextProvider/>}>
          <Route path='/' element={<HomePage />} />

          <Route path='/chat/:id' element={<MessageContextProvider />}>
            <Route path='/chat/:id' element={<ContactDetailContextProvider />}>
              <Route path='/chat/:id/messages' element={<ChatPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
