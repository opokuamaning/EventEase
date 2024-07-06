import { Navigate, createBrowserRouter, } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignUpForm from '../src/Components/Authentication/SignUpForm'
import LoginForm from '../src/Components/Authentication/LoginForm'
import AuthPage from '../src/Components/Authentication/AuthPage'
import ForgotPassword from './Components/Authentication/ForgotPassword';
import ResetPassword from './Components/Authentication/ResetPassword';
import EventNav from './Components/EventManagement/SharedFolder/EventNav';
import EventHome from './Components/EventManagement/EventHome';
import EventDetails from './Components/EventManagement/EventDetails';
import BookedSuccessful from './Components/EventManagement/BookedSuccessful';
import MyEvents from './Components/EventManagement/MyEvents';
import CreateEvent from './Components/EventManagement/CreateEvent';
import UpdateEvent from './Components/EventManagement/UpdateEvent';
// import EditEvent from './Components/EventManagement/EditEvent';
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
    {
        path: '/events',
        element: <EventNav />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Navigate to='my-event' replace />,
            },
            {
                path: 'event-home',
                element: <EventHome />,
                errorElement: <NotFound />,
            },
            {
                path: 'event-details/:id',
                element: <EventDetails />,
                errorElement: <NotFound />,
            },
            {
                path: 'booking-success',
                element: <BookedSuccessful />,
                errorElement: <NotFound />,
            },
            {
                path: 'my-event',
                element: <MyEvents />
            },
            {
                path: 'create-event',
                element: <CreateEvent />,
                errorElement: <NotFound />,
            },
            // {
            //     path: 'edit-event',
            //     element: <EditEvent />,
            //     errorElement: <NotFound />,
            // },
            {
                path: 'update-event',
                element: <UpdateEvent />,
                errorElement: <NotFound />,
            }

        ]
    }
]);
export default router;