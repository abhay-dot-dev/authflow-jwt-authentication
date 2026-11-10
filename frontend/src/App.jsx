import Login from './pages/Login'
import Signup from './pages/Signup'
import Products from './pages/Products'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </>
  )
}

export default App
