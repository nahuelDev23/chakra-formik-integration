import * as Yup from 'yup';

interface FormRegister {
    email: string,
    password1: string,
    password2: string,
    rol:string,
    terms:boolean
}

export const useRegister = () =>{
   const initialValues = {
    email: '',
    password1: '',
    password2: '',
    rol:'',
    terms:false
   }

    const onSubmit = (values: FormRegister) => {
        console.log(values)
    }

    const validationSchema =  Yup.object({
        email: Yup.string().email('El coreo no tiene un formato valido').required('El email es necesario'),
        password1: Yup.string().min(6, 'El password no puede tener menos de 6 caracteres').required('El password es requerido'),
        password2: Yup.string().oneOf([ Yup.ref('password1') ], 'Las contraseñas no son iguales').required('El password es requerido'),
        terms:Yup.boolean().oneOf([true],'Acepta los terminos para continuar'),
        rol:Yup.string().required('El rol es requerido')
    })
    return {
        initialValues,
        validationSchema,
        onSubmit,

    }
}