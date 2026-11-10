import Login from './pages/Login'
import Signup from './pages/Signup'
import Products from './pages/Products'
import { Route, Routes, Navigate, replace } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<Products />} />
        <Route path='/' element={<Navigate to={'/login'} replace/>}/>
      </Routes>
    </>
  )
}

export default App
