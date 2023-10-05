import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import MainLayout from './pages/MainLayout'
import UnlockPage from './pages/UnlockPage'
import ChatsPage from './pages/ChatsPage'

import {loader as loaderUnlock} from './pages/UnlockPage'
import {loader as loaderChats} from './pages/ChatsPage'

import './App.css'
import IaPage from './pages/IaPage'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='' element={<MainLayout />}>
    <Route index loader={loaderUnlock} element={<UnlockPage />} ></Route>
    <Route path='chats' loader={loaderChats} element={<ChatsPage />} ></Route>
    <Route path='/ia' element={<IaPage />} ></Route>
  </Route>
))

function App() {
  return (<RouterProvider router={router}></RouterProvider>)
}

export default App

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />)