
import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { LandingPage } from './components/pages/landing'
import { Signin, Signup } from './components/pages/auth'
import { MyApplications, ViewApplication } from './components/pages/myApplications'
import { EditorHome,  WritingLab, WritingMaterialHome } from './components/pages/writingLab'
import { TaskManger } from './components/pages/taskManager'
import { Profile } from './components/pages/profile'
import { ToastContainer } from 'react-toastify'
import { Resources } from './components/pages/resources'
import { useEffect } from 'react'
import { Support } from './components/pages/support'
import WLAIPrompt from './components/pages/writingLab/subComponents/WLAIPrompt'
function App() {
  useEffect(() => {
    if (localStorage.theme === "dark" ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  return (
    <>
     <ToastContainer />
     <Router>
      <Routes>
        {/* public */}
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/support" element={<Support/>} />

        {/* private */}

        <Route path= "/applications" element={<MyApplications/>} />
        <Route path="/applications/view" element={<ViewApplication/>} />

        <Route path="/writing-lab" element={<WritingLab/>} />
        <Route path='/writing-lab/editor' element={<EditorHome/>} />
        <Route path="/writing-lab/view/all" element={<WritingMaterialHome/>}/>
        <Route path= "/writing-lab/ai/prompt" element={<WLAIPrompt/>} />

        <Route path="/task-manager" element={<TaskManger/>} />

        <Route path="/profile" element={<Profile/>} />

        <Route path= "/resources" element={<Resources/>} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
     </Router>
    </>
  )
}

export default App
