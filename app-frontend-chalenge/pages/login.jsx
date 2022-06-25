import React from 'react'
import {Formik} from 'formik'
import Inputs from '../components/inputs/Inputs'

const login = () => {
  return (

    <div className="container mx-auto h-screen">


        <Formik
        initialValues={{
            name: "",
            email: "",
            password:"",
        }}

        onSubmit={(values) => {


            console.log(values)

        }}
        >

            {({handleSubmit, values, handleChange}) => (

                <div className="shadow-xl bg-gray-50 w-1/4 p-10 py-10 mx-auto mt-40">
                    <h1 className="text-center text-xl uppercase font-bold mb-2">LogIn</h1>

                    <form action="" onSubmit={handleSubmit} className=" flex flex-col gap-5 ">
                        
                        <Inputs type='text' name={'name'} onChange={handleChange} value={values.name}/>

                        <Inputs type='text' name={'email'} onChange={handleChange} value={values.email}/>

                        <Inputs type='password' name={'password'} onChange={handleChange} value={values.password}/>


                        <button type="submit">Enviar</button>

                    </form>

                </div>



            )}

        </Formik>
        
    </div>
    
  )
}

export default login