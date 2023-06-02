import React from 'react'
import AdminHeader from '../adminheader/Adminheader'
import { Outlet } from 'react-router-dom'

const Adminmain = () => {
    return (
        <div>
            <AdminHeader />
            <Outlet />
        </div>
    )
}

export default Adminmain