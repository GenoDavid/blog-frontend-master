import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Banner from '../../components/banner/Banner'
import { Col, Container, Image, Row } from 'react-bootstrap'
import classes from './Adminhome.module.css'
import img1 from '../../assets/blog4.jpg'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addData, linksData } from '../../redux/feutures/PostDataSlice'
import moment from 'moment/moment'
import BlogPost from '../../components/blogPost/BlogPost'
import Sidebar from '../../components/sidbar/Sidebar'
import { Link } from '@mui/material'

const Adminhome = () => {
    const dispatch = useDispatch()
    const { search } = useLocation()
    const { link } = useSelector((state) => state.link)
    const { data, links } = useSelector((state) => state.post)
    console.log(links);

    useEffect(() => {
        linkData()
    }, [search])

    const linkData = async () => {
        const postdata = await axios.get(`${link}/link/get`)
        dispatch(linksData(postdata.data))
    }
    const handledelete = async (id) => {
        const deletedata = await axios.delete(`${link}/link/post/${id}`)
        linkData()
    }
    return (
        <div className={classes.container}>
            <Row>
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
                                                <button onClick={() => handledelete(val._id)}>Delete</button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>


        </div>
    )
}

export default Adminhome
