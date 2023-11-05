import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Jobs from "../Pages/Jobs/Jobs";
import AddJobs from "../Pages/AddJobs/AddJobs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/category.json')


        },
        {
            path:'/login',
            element:<Login></Login>

        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'jobs/:name',
            element: <Jobs></Jobs>
        },
        {
            path:'/addjobs',
            element: <AddJobs></AddJobs>
        }
        

      ]
    },
  ]);

  export default router
  