import Sign_img from './Sign_img';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css'

const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        password: ""
    })



    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, phone, date, password } = inpval;

        if (name === "") {
            toast.error(' name field is requred!', {
                position: "top-center",
            });
        } else if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (phone === "") {
            toast.error('Mobile Number is requred', {
                position: "top-center",
            });
        } else if (date === "") {
            toast.error('date field is requred', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));

        }

    }

    return (
        <>
            <div className="back-grounding">
                <div className="container mt-3">
                    <section className='d-flex justify-content-between'>
                        <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                            <h3 className='text-center col-lg-4' style={{ color: "white" }}>Sign Up Page</h3>
                            <Form >
                                <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">

                                    <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">

                                    <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3 col-lg-7" controlId="formBasicMobile">

                                    <Form.Control onChange={getdata} name='phone' type="text" placeholder="Enter Mobile Number" />
                                </Form.Group>

                                <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">

                                    <Form.Control onChange={getdata} name='date' type="date" />
                                </Form.Group>

                                <Form.Group className="mb-3 col-lg-7" controlId="formBasicPassword" >

                                    <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                                </Form.Group>
                                <Button variant="outline-warning" className='col-lg-7' onClick={addData} style={{ background: "rgb(123, 9, 9)" }} type="submit">
                                    Submit
                                </Button>
                            </Form>
                            <p className='mt-4 m-1' style={{ color: "rgb(25,700,39)" }}>Foget Password? <span><NavLink className='mt-6 m-5' to="/login">Login In </NavLink></span> </p>
                        </div>
                        <Sign_img />
                    </section>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}

export default Home