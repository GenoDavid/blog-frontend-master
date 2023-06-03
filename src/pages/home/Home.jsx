import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Banner from '../../components/banner/Banner'
import { Col, Container, Image, Row } from 'react-bootstrap'
import classes from './home.module.css'
import img1 from '../../assets/blog4.jpg'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addData, linksData } from '../../redux/feutures/PostDataSlice'
import moment from 'moment/moment'
import BlogPost from '../../components/blogPost/BlogPost'
import Sidebar from '../../components/sidbar/Sidebar'
import { Link } from '@mui/material'

const Home = () => {
    const dispatch = useDispatch()
    const { search } = useLocation()
    const { link } = useSelector((state) => state.link)
    const { data, links } = useSelector((state) => state.post)
    console.log(links);

    useEffect(() => {
        linkData()
        fetchData()
    }, [search])
    const fetchData = async () => {
        const postdata = await axios.get(`${link}/post${search}`)
        dispatch(addData(postdata.data))
    }
    const linkData = async () => {
        const postdata = await axios.get(`${link}/link/get`)
        dispatch(linksData(postdata.data))
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
                            <h3 className={classes.para}>LINKS</h3>
                            <div className={classes.scroll}>
                                {
                                    links.map((val, idx) => {
                                        return (
                                            <div>
                                                <img className={classes.img} src={`${link}/images/${val.poto}`} />
                                                <a className={classes.link} href={val.title}>Click Me</a>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                        <div className={classes.header}>
                            <h3 className={classes.para}>HELP LINES</h3>
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
                            <h3 className={classes.para}>SERVICES</h3>
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
