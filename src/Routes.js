
import Education from "./Page/Education/Education";
import Projects from "./Page/Projects/Projects";
import Skills from "./Page/Skills/Skills";
import AboutMe from "./Page/AboutMe/AboutMe";
import ContactMe from "./Page/ContactMe/ContactMe";
import Certifications from "./Page/Certifications/Certifications";
import Feedback from "./Page/Feedback/Feedback";
import Dashboard from "./Page/Dashboard/Dashboard";

const routes = [
    {path:'/' , element:<Dashboard/>},
    {path:'/education' , element:<Education/>},
    {path:'/projects' , element:<Projects/>},
    {path:'/skills' , element:<Skills/>},
    {path:'/aboutme' , element:<AboutMe/>},
    {path:'/contactme' , element:<ContactMe/>},
    {path:'/certifications' , element:<Certifications/>},
    {path:'/feedback' , element:<Feedback/>},
]

export default routes