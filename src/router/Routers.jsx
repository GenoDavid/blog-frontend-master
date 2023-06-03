import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import MainPage from '../pages/MainPage/MainPage'
import SiglePostPage from '../components/siglePostPage/SiglePostPage'
import Register from '../pages/register/Register'
import Login from '../pages/login/Login'
import { useSelector } from 'react-redux'
import Write from '../pages/write/Write'
import Adminhome from '../adminpage/admin/Adminhome'
import Adminmain from '../adminpage/adminmain/Adminmain'
import Creatlink from '../adminpage/adminlink/Creatlink'


const Router = () => {
    const { user } = useSelector(state => (state.auth));
    return (
        <div>
            <Routes>
                <Route path='/' element={<MainPage />}   >
                    <Route path='/' element={<Navigate to="/home" />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='post/:id' element={<SiglePostPage />} />
                    {/* <Route path='/register' element={<Register />} /> */}
                </Route>

            </Routes>
            <Routes>
                <Route path='/login' element={<Login />} />
                {
                    user ? (
                        <>
                            <Route path='/adminmain' element={<Adminmain />} >
                                <Route path='write' element={<Write />} />
                                {/* <Route path='/adminmain' element={<Navigate to={'/adminlink'} />} /> */}
                                <Route path='adminlink' element={<Adminhome />} />
                                <Route path='link' element={<Creatlink />} />
                            </Route>
                        </>

                    ) : (<></>)
                }

            </Routes>
        </div>
    )
}

export default Router
