import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/login/LoginPage';
import { Box, Link, ListItem, UnorderedList } from '@chakra-ui/react';
import { RegisterPage } from '../pages/register/RegisterPage';


const ACTIVEITEM = {
    'background-color': '#036666',
    'border-radius':'4px'
}

export const Navigation = () => {

    return (
        <BrowserRouter>
            <Box bgColor='gray.800' minH='100vh' color='white'>
                <Box w='container.lg' mx='auto' pt='4'>
                    <Box as='nav' mb='8' >
                        <UnorderedList display='flex' listStyleType='none' >
                            <ListItem mr='4'>
                                <Link p='2' as={NavLink} to="/" _activeLink={ACTIVEITEM}>Inicio</Link>
                            </ListItem>
                            <ListItem mr='4'>
                                <Link p='2' as={NavLink} to="/login" _activeLink={ACTIVEITEM}>Iniciar sesion</Link>
                            </ListItem>
                            <ListItem>
                                <Link p='2' as={NavLink} to="/register" _activeLink={ACTIVEITEM}>Registrar</Link>
                            </ListItem>
                        </UnorderedList>
                    </Box>

                    <Routes>
                        <Route path="/" element={<h1>Home</h1>} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Box>
            </Box>
        </BrowserRouter>
    )
};
