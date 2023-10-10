import { createBrowserRouter } from "react-router-dom";
import Explore from '../pages/explore/index'
import Notification from '../pages/notification/index'
import MainLayout from "../layouts/main";
import Messages from "../pages/messages";
import Lists from "../pages/lists";
import Communities from "../pages/communities";
import Premium from "../pages/premium";
import Profile from "../pages/profile";
import Home from "../pages/home";

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
                element: <Notification />
            },
            {
                path: 'messages',
                element: <Messages />
            },
            {
                path: 'lists',
                element: <Lists />
            },
            {
                path: 'communities',
                element: <Communities />
            },
            {
                path: 'premium',
                element: <Premium />
            },
            {
                path: 'profile',
                element: <Profile />
            }
        ]
    },

])
export default routes;