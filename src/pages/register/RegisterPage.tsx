import { Box, Button, Heading, Link } from "@chakra-ui/react";
import { Form, Formik } from 'formik';
import { NavLink } from "react-router-dom";
import { MyCheckbox } from "../../components/MyCheckbox";
import { MyInputText } from "../../components/MyInputText";
import { MySelect } from "../../components/MySelect";
import { useRegister } from '../../hooks/useRegister';

export const RegisterPage = () => {
    const { onSubmit, validationSchema, initialValues } = useRegister()

    return (
        <Box color='black' maxW={{base:'100%',lg:'container.md'}} mx={{base:'4',lg:'auto'}}>
            <Heading textAlign='center' color='white'>Registrate</Heading>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {
                    (formik) => (

                        <Form >
                            <MyInputText label='Email' id='email' name='email' placeholder='Ingrese su email' />
                            <MyInputText type='password' label='Password' id='password1' name='password1' placeholder='Ingrese su password' />
                            <MyInputText type='password' label='Password' id='password2' name='password2' placeholder='Repeti tu password' />
                            <MySelect label="Rol" name='rol' id='rol'>
                                <option value="">Elegi un rol</option>
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
                            </MySelect>
                            <MyCheckbox label='Acepto los terminos y condiciones' id='terms' name='terms' />
                            <Button colorScheme='theGreen' my='4' w='full' type="submit" >Registrate</Button>
                            <Link as={NavLink} color='white' to='/login' isExternal={false}>Ya tenes cuenta? Inicia sesion aca.</Link>
                        </Form>
                    )
                }
            </Formik>
        </Box >
    )
};
