import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignUpForm from '../src/Components/Authentication/SignUpForm'
import LoginForm from '../src/Components/Authentication/LoginForm'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: 'signup',
        element: <SignUpForm />,
    },
    {
        path: 'login',
        element: <LoginForm />,
    }
]);
export default router;