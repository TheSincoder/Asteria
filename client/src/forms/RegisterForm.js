import React, { useContext } from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from "../components/Button";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import useEditUser from '../hooks/useEditUser';
import useRegister from '../hooks/useRegister';
import {AppContext} from '../context/AppContext';





const FormSchema = Yup.object({
    "username":Yup.string().required("Required"),
    "first_name":Yup.string().required("Required"),
    "last_name":Yup.string().required("Required"),
    "email": Yup.string().email("Must be a valid e-mail format").required(),
    "password": Yup.string().required("Required")
})


export default function RegisterForm() {
    const {user} = useContext(AppContext)
    const [newUser, setNewUser] = useState({})
    const [editUser, setEditUser] = useState({})
    
    useEditUser(editUser)
    useRegister(newUser, setNewUser)
    
    
    const initialValues={
        username:user?.username ?? '',
        first_name:user?.first_name ?? '',
        last_name:user?.last_name ?? '',
        email:user?.email ?? '',
        password:user?.password ?? ''        
    }
    
    useRegister({user})
    
    const handleSubmit =(values,resetForm)=>{
        console.log(values)
        if(!user?.token){
            setNewUser(values)
        }else{
            setEditUser({...values, id:user.id})
        }
        resetForm(initialValues);
    }

    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize:true

    })

  

  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
        fullWidth
        id="username"
        name="username"
        type="text"
        sx={{ mt: 2 }}
        label="Username"
        placeholder="Seymour"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
    />
    <TextField
        fullWidth
        id="first_name"
        name="first_name"
        type="text"
        sx={{ mb: 2, mt: 2 }}
        label="First Name"
        placeholder="Seymour"
        value={formik.values.first_name}
        onChange={formik.handleChange}
        error={formik.touched.first_name && Boolean(formik.errors.first_name)}
        helperText={formik.touched.first_name && formik.errors.first_name}
    />
    <TextField
        fullWidth
        id="last_name"
        name="last_name"
        sx={{mb: 2 }}
        type="text"
        label="Last Name"
        placeholder="Nakamoto"
        value={formik.values.last_name}
        onChange={formik.handleChange}
        error={formik.touched.last_name && Boolean(formik.errors.last_name)}
        helperText={formik.touched.last_name && formik.errors.last_name}
    />
    <TextField
            fullWidth
            id="email"
            name="email"
            sx={{mb:2}}
            label="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}        
        />
    <TextField
            fullWidth
            id="password"
            name="password"
            type="password"
            sx={{mb:2}}
            label="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}        
        />



<Button type="submit" sx={{ width: "100%", my:1 }}>Submit</Button>


</form>
  )
}