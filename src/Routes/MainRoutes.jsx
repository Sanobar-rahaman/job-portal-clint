import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Jobs from "../Pages/Jobs/Jobs";
import AddJobs from "../Pages/AddJobs/AddJobs";
import AllJobs from "../Pages/AllJobs/AllJobs";
import Details from "../Pages/Details/Details";
import ApplyJobs from "../Pages/Applyjobs/ApplyJobs";
import PrivateRoute from "./PrivateRoutes";
import Blog from "../Pages/Blog/Blog";

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
            path:'/jobs/:job_title',
            element: <Jobs></Jobs>,
            loader:({params})=>fetch(`http://localhost:5001/job/${params.job_title}`)
        },
        {
            path:'/addjobs',
            element: <AddJobs></AddJobs>
        },
        {
            path:'/alljobs',
            element:<AllJobs></AllJobs>,
            loader: ()=>fetch('http://localhost:5001/alljobs')
        },
        {
            path:'/detail/:id',
            element:<PrivateRoute><Details></Details></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5001/detailjob/${params.id}`)
        },
        {
            path:'/appliedjobs',
            element:<ApplyJobs></ApplyJobs>,
            loader:()=>fetch('http://localhost:5001/applyjob')
        },
        {
            path:'/blog',
            element: <Blog></Blog>
        }


      ]
    },
  ]);

  export default router
  