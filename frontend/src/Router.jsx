import { createBrowserRouter, } from 'react-router-dom';
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
                path: 'login',
                element: <LoginForm />,
            },
            {
                path: 'signup',
                element: <SignUpForm />,
                errorElement: <NotFound />,
            },
            //   {
            //     index: true,
            //     element: <Navigate to='login' replace />,
            //   },
            //   {
              {
                path: 'reset',
                element: <ResetPassword />,
              },
              {
                path: 'forget-password',
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