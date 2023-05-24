
import './App.css'
import { AdsBar } from './components/AdsBar'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Routes, Route } from 'react-router-dom'
import { Introduce } from './components/Introduce'
import { Product } from './components/Product'
import { Contact } from './components/Contact'
import { Documents } from './components/Documents'

function App() {

  return (
    <><div className='root'>
      <AdsBar />
      <div className='content'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Introduce />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/documents' element={<Documents />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </div>


    </div>
    </>
  )
}

export default App
