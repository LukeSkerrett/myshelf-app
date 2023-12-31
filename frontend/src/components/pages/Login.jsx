import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
import validation from './LoginValidation'
import {SERVER_URL} from './index'
import { IoIosLogIn } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
const shoeStyle = { color: "#2b2d42"}
export const Login = () => {

    const [values, setValues] = useState({
        username: ''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput=(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit=(event) => {
        event.preventDefault();
        const err = validation(values);
        setErrors(err);
        if(err.username === "") {
            axios.post(`${SERVER_URL}/login`, values)
            .then(res => {
                if(res.data != "Error" && res.data != "Fail"){
                    navigate('/shelf', {state: res.data[0]});
                }
                else{
                    alert("Account does not exist")
                }
            })
            .catch(err => console.log(err));
        }
    }
  return (

        <div className='d-flex justify-content-center align-items-start vh-100'>
            <div className='p-3 rounded w-25'>
                <h2>Login</h2>
                <form action="" onSubmit ={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="username"><strong>Username</strong></label>
                        <input type="text" placeholder='Enter username here...' name='username'
                        onChange={handleInput} className ='form-control rounded-0'/>
                        {errors.username && <span className='text-danger'> {errors.username} </span>}
                    </div>
                    <button type='submit' className ='btn btn-default w-100 rounded-0 text-decoration-nonte'><strong>Login <IoIosLogIn/></strong>  </button>
                    <p>You agree to our terms and policies</p>
                    <Link to= "/signup"className ='btn btn-default w-100 rounded-0 text-decoration-nonte'>Create Account <MdOutlineAccountCircle /></Link>
                </form>
            </div>
        </div>

  )
}
