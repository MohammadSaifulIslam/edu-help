import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AdmissionPage from "../pages/AdmissionPage/AdmissionPage";
import ApplyPage from "../pages/ApplyPage/ApplyPage";
import CollegeDetailsPage from "../pages/CollegeDetailsPage/CollegeDetailsPage";
import CollegePage from "../pages/CollegePage/CollegePage";
import Home from "../pages/HomePage/Home/Home";
import MyCollegePage from "../pages/MyCollegePage/MyCollegePage";
import Login from "../pages/Others/Login/Login";
import Register from "../pages/Others/Register/Register";
import ResearchDetailsPage from "../pages/ResearchDetailsPage/ResearchDetailsPage";
import ReviewPageHome from "../pages/ReviewPage/ReviewPageHome";

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
          path: '/college/:id',
          element: <CollegeDetailsPage/>
        },
        {
          path: '/admission',
          element: <AdmissionPage/>
        },
        {
          path: '/research/:id',
          element: <ResearchDetailsPage/>
        },
        {
          path: '/review/:id',
          element: <ReviewPageHome/>
        },
        {
          path: '/my-college',
          element: <MyCollegePage/>
        },
        {
          path: '/apply-form/:id',
          element: <ApplyPage/>
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