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
                    <div className={classes.top}>
                        <div className={classes.head}>
                            <h1 className={classes.para}>Links</h1>
                            <div className={classes.scroll}>


                            </div>

                        </div>
                        <div className={classes.header}>
                            <h1 className={classes.para}>Help Lines</h1>
                            <div className={classes.scroll}>
                                <p>325-568-56</p>
                                <p>325-568-56</p>
                                <p>325-568-56</p>
                                <p>325-568-56</p>
                                <p>325-568-56</p>
                                <p>325-568-56</p>
                                <p>325-568-56</p>
                                <p>325-568-56</p>
                            </div>
                        </div>
                        <div className={classes.headers}>
                            <h1 className={classes.para}>Service</h1>
                            <div className={classes.scroll}>
                                <p>jcyehvwuey</p>
                                <p>jcyehvwuey</p>
                                <p>jcyehvwuey</p>
                                <p>jcyehvwuey</p>
                                <p>jcyehvwuey</p>
                                <p>jcyehvwuey</p>
                                <p>jcyehvwuey</p>
                                <p>jcyehvwuey</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>


        </div>
    )
}

export default Home
