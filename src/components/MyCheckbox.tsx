import { Box, Checkbox, Flex, FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { ErrorMessage, Field } from 'formik';

interface Props {
    label: string;
    name: string;
    [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {

    return (
        <Box mb='4'>
            <Field type="text" name={props.name} >
                {
                    ({ field, form }: any) => (
                        <FormControl isInvalid={form.errors[props.name] && form.touched[props.name]}>
                            <Flex alignItems='center'>
                                <FormLabel m='0' mr='4' mt='1' color='white' htmlFor={props.name}>{label}</FormLabel>
                                <Checkbox color='white' {...field} {...props} />
                            </Flex>

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
