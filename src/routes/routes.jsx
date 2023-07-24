import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import CollegePage from "../pages/CollegePage/CollegePage";
import Home from "../pages/HomePage/Home/Home";

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
      ]
    },
  ]);

export default router;