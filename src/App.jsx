import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import UserLayout from './components/layouts/user/UserLayout'
import Home from './components/pages/userpages/Home'
import AdminLayout from './components/layouts/admin/AdminLayout'
import About from './components/pages/userpages/About'
import Login from './components/pages/userpages/Login'
import { ToastContainer } from 'react-toastify'
import Contact from './components/pages/userpages/contact'
import Dashboard from './components/pages/adminpages/Dashboard'
import AddCategory from './components/pages/adminpages/category/AddCategory'
import ManageCategory from './components/pages/adminpages/category/ManageCategory'
import UpdateCategory from './components/pages/adminpages/category/UpdateCategory'
import Register from './components/pages/userpages/Register'
import TeacherLayout from './components/layouts/teacher/Teacherlayout'
// import TeacherAddcategory from './components/pages/teacherpages/category/TeacherAddcategory'
// import TeacherManagecategory from './components/pages/teacherpages/category/TeacherManagecategory'
import TeacherDashboard from './components/pages/teacherpages/TeacherDashboard'
import ViewCategory from './components/pages/userpages/ViewCategory'

import ManageGroup from './components/pages/adminpages/groups/ManageGroup'
import UpdateGroup from './components/pages/adminpages/groups/UpdateGroup'
import ViewGroup from './components/pages/userpages/ViewGroup'
import AddGroup from './components/pages/adminpages/groups/AddGroup'

function App() {
  

  return (
<>
<BrowserRouter>
          <Routes>
                <Route path="/" element={<UserLayout/>}>
                    <Route path="/"  element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/viewCategory" element={<ViewCategory/>}></Route>
                    <Route path="/viewGroup" element={<ViewGroup/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                </Route>

                <Route path="/admin" element={<AdminLayout/>}>
                    <Route index  element={<Dashboard/>}></Route>
                    <Route path="/admin/addCategory" element={<AddCategory/>}></Route>
                    <Route path="/admin/manageCategory" element={<ManageCategory/>}></Route>
                    <Route path="/admin/updateCategory/:id" element={<UpdateCategory/>}></Route>
                    <Route path="/admin/addGroup" element={<AddGroup/>}> </Route>
                     <Route path="/admin/manageGroup" element={<ManageGroup/>}> </Route>
                     <Route path="/admin/updateGroup" element={<UpdateGroup/>}> </Route>
                </Route>
               <Route  path="/teacher" element={< TeacherLayout/>} >
                   <Route index element={<TeacherDashboard/>}></Route>
                     {/* <Route path="/teacher/addCategory" element={<TeacherAddcategory/>}></Route> */}
                   {/* <Route path="/teacher/manageCategory" element={<TeacherManagecategory/>}></Route> */}

              </Route>
          </Routes>
      </BrowserRouter>
      <ToastContainer/>
</>
  )
}

export default App
