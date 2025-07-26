import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

import NavBar from './components/NavBar.jsx'
import Body from './components/Body.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function Applayout() {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/About",
                element: <About />
            },
        ]
    },
]);

function App() {
    return (
        <>
         
            <RouterProvider router={router} />
        </>
    );
}

export default App;