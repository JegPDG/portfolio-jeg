import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import MainLayout from './layout/MainLayout';
import ProjectDetail from './pages/ProjectDetail';
import ContactModal from './components/medium/ContactModal';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout></MainLayout>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/project/:id' element={<ProjectDetail></ProjectDetail>}></Route>
            <Route path='/testmodal' element={<ContactModal></ContactModal>}></Route>

          </Route>
        </Routes>
      </Router>
     
    </>
  )
}

export default App
