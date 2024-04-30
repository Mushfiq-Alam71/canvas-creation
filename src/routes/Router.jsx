import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AllArtCrafts from "../components/Home/AllArtCrafts";
import AddCraft from "../components/AddCraft/AddCraft";
import UpdateCraft from "../components/UpdateCraft/UpdateCraft";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ContactUs from "../components/ContactUs/ContactUs";
import AboutUs from "../components/AboutUs/AboutUs";
import ContentDetails from "../components/Home/ContentDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MyArtCrafts from "../components/MyArtCrafts/MyArtCrafts";
import UserProfile from "../components/UserProfile/UserProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b9-a-assignment-10-server-theta.vercel.app/craft')
            },
            {
                path: '/allartcrafts',
                element: <PrivateRoute><AllArtCrafts></AllArtCrafts></PrivateRoute>,
                loader: () => fetch('https://b9-a-assignment-10-server-theta.vercel.app/craft')
            },
            {
                path: '/addCraft',
                element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
            },
            {
                path: '/myartcrafts',
                element: <MyArtCrafts></MyArtCrafts>
            },
            {
                path: '/updateCraft/:id',
                element: <PrivateRoute><UpdateCraft></UpdateCraft></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b9-a-assignment-10-server-theta.vercel.app/craft/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/userprofile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: '/contactus',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/craft/:id',
                element: <PrivateRoute><ContentDetails></ContentDetails></PrivateRoute>,
                // loader: () => fetch(`https://b9-a-assignment-10-server-theta.vercel.app/craft/${params.id}`)
                loader: ({ params }) => fetch(`https://b9-a-assignment-10-server-theta.vercel.app/craft/${params.id}`)

            }
        ]
    }
]);

export default router;