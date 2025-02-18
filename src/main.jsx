import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skill from './components/Skill.jsx'
import Projects from './components/Projects.jsx'
import Certification from './components/Certification.jsx'
import Contact from './components/Contact.jsx'
import NotFound from './components/NotFound.jsx'
import { RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/education",
        element: <Education/>
      },
      {
        path: "/skill",
        element: <Skill/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/certification",
        element: <Certification/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ],
    errorElement: <NotFound/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
