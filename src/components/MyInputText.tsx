import { Box, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { ErrorMessage, Field } from 'formik';

interface Props {
    label: string;
    name: string;
    [x: string]: any;
}

export const MyInputText = ({ label, ...props }: Props) => {

    return (
        <Box mb='4'>
            <Field type="text" name={props.name} >
                {
                    ({ field, form }: any) => (
                        <FormControl isInvalid={form.errors[props.name] && form.touched[props.name]}>
                            <FormLabel color='white' htmlFor={props.name}>{label}</FormLabel>
                            <Input color='white' {...field} {...props} />
                            <FormErrorMessage>
                                <ErrorMessage name={props.name} />
                            </FormErrorMessage>
                        </FormControl>
                    )
                }
            </Field>
        </Box>

    )
};
