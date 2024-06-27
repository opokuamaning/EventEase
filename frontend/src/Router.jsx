import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />,
        children: [
            {
                path: 'signup',
            element: <SignUp />,
        }
        ],
    }, 
]);
export default router;