import { Route, Router, Routes } from 'react-router-dom'
import '../style/App.css'
import SharedLayout from '../sharedLayout/sharedLayout'
import Home from '../pages/Home'
import AccountPage from '../pages/Account'

export default function App() {

  return (
      <Routes>
        <Route path='/' element={ <SharedLayout /> } >
          <Route path='/' element={ <Home /> } />
        </Route>
        <Route path='/login' element={ <AccountPage /> } />
        <Route path='/register' element={ <AccountPage /> } />
      </Routes>
  )
}

