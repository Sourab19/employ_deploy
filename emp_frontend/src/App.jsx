import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import { Route, Routes } from 'react-router-dom'
import AddEmp from './components/AddEmp'
import EmpUser from './components/EmpUser'
import EmpAdmin from './components/EmpAdmin'
import Main from './components/Main'
import Main2 from './components/Main2'


function App() {


  return (
    <>
      {/* <Login /> */}
      {/* <Navbar /> */}
      {/*  */}
      {/* <EmpAdmin /> */}
      {/* <Navbar2 /> */}
      <Routes>
        <Route path={'/'} element={<Login />}/>
        <Route path={'/user'} element={<Main child={<EmpUser />} />}/>
        <Route path={'/add'} element={<Main2 child={<AddEmp />} />}/>
        <Route path={'/admin'} element={<Main2 child={<EmpAdmin />} />}/>
      </Routes>

    </>
  )
}

export default App
