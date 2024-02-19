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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[{
      path: "/",
      element: <Home />
    },
    {
      path: "/RoadMap",
      element: <RoadMap />
    },
    {
      path: "/cetification",
      element: <Cetification/>
    },
    {
      path: "/blogs",
      element: <Blogs/>
    },
    {
      path: "/game-room",
      element: <GameRoom/>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
