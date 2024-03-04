import React from 'react'
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
import FSMindmap from './pages/ReactMindmap.jsx';
import { UserContextProvider } from './context/UserContext.jsx';
import FrontEndCetificate from './pages/FrontEndCetificate.jsx';



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
        path: "/mindmap",
        element: <FSMindmap />,
      },
      {
        path: "/frontend",
        element: <FrontEndCetificate />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    
      <RouterProvider router={router} />
    
  </UserContextProvider> 
);
