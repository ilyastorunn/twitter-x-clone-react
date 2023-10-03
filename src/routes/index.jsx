import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/index';
import Explore from '../pages/explore/index';
import Notifications from '../pages/notifications/index';
import MainLayout from "../layouts/main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'explore',
                element: <Explore />
            },
            {
                path: 'notifications',
                element: <Notifications />
            },
        ]
    }
])

export default routes;