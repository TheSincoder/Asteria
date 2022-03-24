import React, {useContext, useState} from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import {AppContext} from '../context/AppContext';
import useLogin from '../hooks/useLogin';
import {Link} from 'react-router-dom';



const FormSchema = Yup.object(
    {
        username: Yup.string().required(),
        password: Yup.string().required()
    }
)

const initialValues ={
    username: "",
    password: ""
}


export default function LoginForm() {
    const {setUser} = useContext(AppContext);
    const [loginCreds, setLoginCreds] = useState({})
    const [error, setError] = useState('')

    useLogin(loginCreds, setError, setUser, setLoginCreds)

    const handleSubmit=async (values)=>{
        setLoginCreds(values)
        console.log('Logged In(from Form)')
    }


    const formik = useFormik({
        initialValues: initialValues,
        validationSchema:FormSchema,
        onSubmit:(values)=>{handleSubmit(values)}
    })


  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
            id="username"
            name="username"
            fullWidth
            sx={{mb:2, mt:2}}
            label="username"
            placeholder="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
            id="password"
            name="password"
            type="password"
            fullWidth
            sx={{mb:2}}
            label="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
        />
        <Button type="submit" sx={{width:"100%"}}>Login</Button>
        <Link to='/register' style={{color:'inherit', textDecoration:'none'}}>
        <Button color= 'secondary' sx={{width:"100%", mt: 2}}>Register</Button>
        </Link>
        {error}

    </form>
  )
}