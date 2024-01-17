import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ErrorPage } from './components/ErrorPage';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Meals from './components/Meals';
import Contact from './components/contact';
import Content from './components/Content.jsx';
import RestorantMenue from './components/RestorantMenue.jsx';
import Profile from './components/Profile_class.jsx';


//!types of routing
// 1. client side routing (react does this)
// 2. server side routing (normal js does this hence page reloads)

//!based on functions
// 1. Static routing (where we know the route address & it is fixed -> example AboutUs page)
// 2. Dynamic routing (where we don't know the route address exactly --> example Restorants/:id (here id is variable depending on the click of user id will change & that food recipee will be opened))


//creating the Router using createBrouserRouter
const AppRouter = createBrowserRouter([
    { path: "/",
     element: <App/>,
     errorElement:<ErrorPage/>,
     children:[
        { path: '/', element: <Content /> },
        { path: "/aboutUs",
          element: <AboutUs/>,
          children:[
            {
            path: 'profile',
            element: <Profile/>
            }
          ] 
        },
        { path: "/meals", element: <Meals/> },
        { path: "/contact", element: <Contact/> },
        { path: "/restorantMenue/:id", element: <RestorantMenue/> },
        //if we not handel error then only error code will generate hence commenting this
        // { path: "*", element: <ErrorPage/> }
     ]
    }
  ])

  ReactDOM.createRoot(document.getElementById('root')).render(
    // Rendering the router using RouterProvider
    <RouterProvider router={AppRouter}> </RouterProvider>
)