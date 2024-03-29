import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AddBook from "../Pages/AddBook";
import Login from "../Pages/Login";
import SignUpForm from "../Pages/SignUpForm";
import AllBooks from "../Pages/AllBooks";
import Details from "../Pages/Details";
import Privetroute from "./Privetroute";
 
 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/login",
                element:<Login></Login>,

            },
            {
                path: "/signup",
                element: <SignUpForm></SignUpForm>,

            },
            {
                path: "/addbook",
                element: <Privetroute><AddBook></AddBook></Privetroute>,

            },
            {
                path: "/allbooks",
                element: <AllBooks></AllBooks>,

            },
            {
                path:"/bookdetails/:id",
                loader:({params})=> fetch(`http://localhost:5000/addbooks/${params.id}`),
                element:<Privetroute><Details></Details></Privetroute>,
            },
        ]

    }
])
export default router;