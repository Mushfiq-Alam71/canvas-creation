import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home/Home";
import AddCraft from "../components/AddCraft/AddCraft";
import UpdateCraft from "../components/UpdateCraft/UpdateCraft";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/craft')
            },
            {
                path: '/addCraft',
                element: <AddCraft></AddCraft>
            },
            {
                path: '/updateCraft',
                element: <UpdateCraft></UpdateCraft>
            }
        ]
    }
]);

export default router;