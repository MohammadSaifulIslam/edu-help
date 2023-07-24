import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AdmissionPage from "../pages/AdmissionPage/AdmissionPage";
import CollegePage from "../pages/CollegePage/CollegePage";
import Home from "../pages/HomePage/Home/Home";
import Login from "../pages/Others/Login/Login";
import Register from "../pages/Others/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/colleges',
          element: <CollegePage/>
        },
        {
          path: '/admission',
          element: <AdmissionPage/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
      ]
    },
  ]);

export default router;