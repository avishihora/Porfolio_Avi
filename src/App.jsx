import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/index.jsx";
import Project from "./components/Project/project.jsx";
import ProjectDetails from "./components/Project/projectDetails.jsx";
import HomeLayout from "./components/HomeLayout.jsx"

// import About from "./components/A"
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
        path: "/project",
        element: <ProjectDetails />,
        children: [
          {
            index: true,
            path: "1",
            element: <ProjectDetails />,
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
