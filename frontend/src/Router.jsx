import { Navigate, createBrowserRouter, } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignUpForm from '../src/Components/Authentication/SignUpForm'
import LoginForm from '../src/Components/Authentication/LoginForm'
import AuthPage from '../src/Components/Authentication/AuthPage'
import ForgotPassword from './Components/Authentication/ForgotPassword';
import ResetPassword from './Components/Authentication/ResetPassword';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: '/auth',
        element: <AuthPage />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Navigate to='auth' replace />,
            },
            {
                path: 'login',
                element: <LoginForm />,
                errorElement: <NotFound />,
            },
            {
                path: 'signup',
                element: <SignUpForm />,
                errorElement: <NotFound />,
            },
            {
                path: 'reset',
                element: <ResetPassword />,
                errorElement: <NotFound />,
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />,
                errorElement: <NotFound />,
            },
            //   {
            //     path: 'check-email',
            //     element: <CheckEmail />,
            //   },
        ],
    },
]);
export default router;