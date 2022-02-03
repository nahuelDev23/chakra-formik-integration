import * as Yup from 'yup';

interface FormLogin {
    email: string,
    password: string
}

export const useLogin = () =>{
   const initialValues = {
    email: '',
    password: ''
   }

    const onSubmit = (values: FormLogin) => {
        console.log(values)
    }

    const validationSchema =  Yup.object({
        email: Yup.string().email('El coreo no tiene un formato valido').required('El email es necesario'),
        password: Yup.string().min(6, 'El password no puede tener menos de 6 caracteres').required('El password es requerido')
    })
    return {
        initialValues,
        validationSchema,
        onSubmit,

    }
}