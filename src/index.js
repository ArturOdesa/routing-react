import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './Pages/Welcome/Welcome';
import './global.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './Pages/Root.jsx';
import StateHook from './Pages/StateHookPage/StateHook.js';
import Community from './Pages/Community/Community.js';
import Resources from './Pages/Resources/Resources.js';
import About from './Pages/About/About.js';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import Users from './Pages/Users/Users.jsx';
import User from './Pages/Users/User.jsx';
import { userLoader } from './loaders/userLoader.js';
import Installation from './Pages/Installation/Installation.js';
import Thinking from './Pages/Thinking/Thinking.js'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<Welcome />} />
            <Route path='installation' element={<Installation />} />
            <Route path='statehooks' element={<StateHook />} />
            <Route path='community' element={<Community />} />
            <Route path='resources' element={<Resources />} />
            <Route path='about' element={<About />} />
            <Route path='thinking' element={<Thinking />} />
            <Route path='users' element={<Users />} />
            <Route path='users/:id' loader={userLoader} element={<User />} errorElement={<ErrorPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Route>
    ),
    {
  future: {v7_relativeSplatPath: true,},
}
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} future={{v7_startTransition: true,}}/>
);





