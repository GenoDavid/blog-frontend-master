import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Banner from '../../components/banner/Banner'
import { Col, Container, Image, Row } from 'react-bootstrap'
import classes from './home.module.css'
import img1 from '../../assets/blog4.jpg'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addData } from '../../redux/feutures/PostDataSlice'
import moment from 'moment/moment'
import BlogPost from '../../components/blogPost/BlogPost'
import Sidebar from '../../components/sidbar/Sidebar'
import { Link } from '@mui/material'

const Home = () => {
    const dispatch = useDispatch()
    const { search } = useLocation()
    const { link } = useSelector((state) => state.link)
    const { data } = useSelector((state) => state.post)

    useEffect(() => {

        fetchData()
    }, [search])
    const fetchData = async () => {
        const postdata = await axios.get(`${link}/post${search}`)
        dispatch(addData(postdata.data))
    }

    return (
        <div className={classes.container}>
            <Banner />

            <Row>
                <Col lg='8' className='d-flex flex-wrap'>
                    {
                        data.map((val, idx) => {
                            return (
                                <BlogPost val={val} key={idx} />
                            )
                        })
                    }

                </Col>
                <Col lg='4'>
                    <div className={classes.head}>
                        <h1>hai</h1>
                        <div className={classes.box}>
                            <img className={classes.img} />
                            <a target='_blank' href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html">Click Me</a>
                        </div>
                        <a target='_blank' href='https://timesofindia.indiatimes.com/entertainment/english/web-stories/11-must-watch-films-of-clint-eastwood/photostory/100653712.cms'>Click Me</a>
                    </div>
                    <div className={classes.header}>

                    </div>
                    <div className={classes.headers}>
                        <Link>https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html</Link>
                    </div>
                </Col>
            </Row>


        </div>
    )
}

export default Home
