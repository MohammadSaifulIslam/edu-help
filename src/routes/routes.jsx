import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import CollegePage from "../pages/CollegePage/CollegePage";
import Home from "../pages/HomePage/Home/Home";
import Login from "../pages/Others/Login/Login";

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
          path: '/login',
          element: <Login/>
        },
      ]
    },
  ]);

export default router;