import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import Home from './pages/Home'
import MainLayout from './layout/MainLayout';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout></MainLayout>}>
            <Route path='/' element={<Home></Home>}></Route>
          
          </Route>
        </Routes>
      </Router>
     
    </>
  )
}

export default App
