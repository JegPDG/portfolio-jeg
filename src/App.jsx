import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import Home from './pages/Home'
import MainLayout from './layout/MainLayout';
import ProjectDetail from './pages/ProjectDetail';
import ContactModal from './components/medium/ContactModal';
import Project1 from './projectpages/Project1';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout></MainLayout>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/project/name' element={<ProjectDetail></ProjectDetail>}></Route>
            <Route path='/testmodal' element={<ContactModal></ContactModal>}></Route>

            <Route path='/project/1' element={<Project1></Project1>}></Route>
          </Route>
        </Routes>
      </Router>
     
    </>
  )
}

export default App
