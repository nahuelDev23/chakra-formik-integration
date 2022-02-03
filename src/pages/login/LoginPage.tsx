import { Box, Button,Heading,Link } from "@chakra-ui/react";
import { Form, Formik } from 'formik';
import { NavLink } from "react-router-dom";
import { MyInputText } from "../../components/MyInputText";
import { useLogin } from "../../hooks/useLogin";


export const LoginPage = () => {

    const {onSubmit,validationSchema,initialValues} = useLogin()
    
    return (
        <Box color='black' maxW='container.sm' mx='auto' mt='4'>
            <Heading textAlign='center' color='white'>Login</Heading>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {
                    (formik) => (

                        <Form >
                            <MyInputText label='Email' id='email' name='email' placeholder='Ingrese su email' />
                            <MyInputText type='password' label='Password' id='password' name='password' placeholder='Ingrese su password' />
                            <Button my='4' w='full' type="submit">Iniciar sesion</Button>
                            <Link as={NavLink} color='white'  to='/register' isExternal={false}>No tenes cuenta? Registrate aca.</Link>
                        </Form>

                    )
                }
            </Formik>
        </Box >
    )
};
