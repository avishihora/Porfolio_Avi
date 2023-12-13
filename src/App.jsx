import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/index.jsx";
import ProjectDetails from "./components/Project/projectDetails.jsx";
import HomeLayout from "./components/HomeLayout.jsx"
import MyDesign from "./components/Project/MyDesign.jsx"
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Layout />,
      },
      {
        path: "project",
        children: [
          {
            index: true,
            path: "projectDetails",
            element: <ProjectDetails />,
          },
          {
            path: "images",
            element: <MyDesign />,
          },
        ],
      },
      // {
      //   path:'about',
      //   element:<About/>
      // },
      // {
      //   path:'contact',
      //   element:<Contact/>
      // }
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
