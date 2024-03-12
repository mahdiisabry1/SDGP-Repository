
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import RoadMap from './pages/RoadMap.jsx';
import Cetification from './pages/Cetification.jsx';
import GameRoom from './pages/GameRoom.jsx';
import Quiz from './components/Quz.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import PostDetails from './pages/PostDetails.jsx';
import CreatePost from './pages/CreatePost.jsx';
import Profile from './pages/Profile.jsx';
import ReactMindmap from './pages/ReactMindmap.jsx';
import AngularMindmap from './pages/AngularMindmap.jsx';
import FEMindmap from './pages/FEMindmap.jsx';
import BEMindmap from './pages/BEMindmap.jsx';
import FSMindmap from './pages/FSMindmap.jsx';
import ReactCertification from './pages/ReactCertification.jsx';
import { UserContextProvider } from './context/UserContext.jsx';
import AngularCertification from './pages/AngularCertification.jsx';
import FECertification from './pages/FSCertification.jsx';
import BECertification from './pages/BECertification.jsx';
import FSCertification from './pages/FSCertification.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/RoadMap",
        element: <RoadMap />,
      },
      {
        path: "/cetification",
        element: <Cetification />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/game-room",
        element: <GameRoom />,
      },
      {
        path: "/Quiz",
        element: <Quiz />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/posts/post/:id",
        element: <PostDetails />,
      },
      {
        path: "/create",
        element: <CreatePost />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/path-to-components/ReactMindmap",
        element: <ReactMindmap />,
      },
      {
        path: "/path-to-components/AngularMindmap",
        element: <AngularMindmap />,
      },
      {
        path: "/path-to-components/FEMindmap",
        element: <FEMindmap />,
      },
      {
        path: "/path-to-components/BEMindmap",
        element: <BEMindmap />,
      },
      {
        path: "/path-to-components/FSMindmap",
        element: <FSMindmap />,
      },
      {
        path: "/path-to-components/ReactCertification",
        element: <ReactCertification />,
      },
      {
        path: "/path-to-components/AngularCertification",
        element: <AngularCertification />,
      },
      {
        path: "/path-to-components/FECertification",
        element: <FECertification />
      },
      {
        path: "/path-to-components/BECertification",
        element: <BECertification />
      },
      {
        path: "/path-to-components/FSCertification",
        element: <FSCertification />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <RouterProvider router={router} />
  </UserContextProvider>
);
