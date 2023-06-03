import React from 'react'
import classes from './AdminHeader.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
const AdminHeader = () => {

    const dispatch = useDispatch()
    const navigator = useNavigate()

    return (
        <div className={classes.container}>
            <div className={classes.box1}>

            </div>
            <div className={classes.box2}>
                {/* <h4>{user.name}</h4> */}

                <button>
                    <Link to={'write'}>Write</Link>
                </button>
                <button>
                    <Link to={'link'}>Link</Link>
                </button>
                <button>
                    <Link to={'/home'}>Home</Link>
                </button>
                <button>
                    <Link to={'adminlink'}>Admin</Link>
                </button>
            </div>
        </div>
    )
}
export default AdminHeader