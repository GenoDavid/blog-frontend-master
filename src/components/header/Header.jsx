import React, { useEffect, useRef, useState } from 'react'
import classes from './header.module.css'
import logo from '../../assets/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { BiSearch } from 'react-icons/bi'
import { logout } from '../../redux/feutures/AuthSlice'
import Logout from '../logoutUser/Logout'
const Header = () => {
    const [search, setSearch] = useState('')

    const { user } = useSelector((state) => state.auth)
    const { link } = useSelector((state) => state.link)


    const navigater = useNavigate()
    const dispatch = useDispatch()

    const [showMenu, setShowMenu] = useState(false);

    const [open, setOpen] = useState(false)
    const [logoutPop, setLogoutPop] = useState(false)


    const openProfile = () => {
        setOpen(!open)
    }
    useEffect(() => {

    }, [user])

    const logoutuser = () => {
        dispatch(logout())
        navigater('/login')
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        // const se = search.toLowerCase() || search.toUpperCase()
        navigater(`/home/?search=${search}`)
    }
    return (
        <header className={classes.header}   >
            <div className={classes.wrapper}>

                <div className={classes.logo}>
                    <img src={logo} />
                </div>

                <form onSubmit={handlesubmit}>
                    <input onChange={e => setSearch(e.target.value)} className={classes.search} placeholder='search here' />
                    <button className={classes.srac}><BiSearch /></button>
                </form>

            </div>
            {
                logoutPop ?
                    <Logout>
                        <div className={classes.logoutbox}>
                            <h5> conform logot your account</h5>

                            <div className={classes.logoutbtn}>
                                <h5 className={classes.logoutDel}
                                    onClick={logoutuser} >Logout</h5>
                                <h5 className={classes.logoutChannel}
                                    onClick={() => setLogoutPop(false)}>Cancel</h5>
                            </div>
                        </div>
                    </Logout> : null
            }
        </header >
    )
}

export default Header
