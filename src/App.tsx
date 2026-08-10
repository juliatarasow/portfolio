import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ROUTES } from './routes'

import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { LandingPage } from './pages/LandingPage'
import { Projects } from './pages/Projects'
import { ProjectParticipants } from './pages/ProjectParticipants'
import { ProjectSnippy } from "./pages/ProjectSnippy"
import { ProjectKsk } from "./pages/ProjectKsk"
import { Contact } from './pages/Contact'




export function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1">
          <Routes>
            <Route path={ROUTES.HOME} element={<LandingPage />} />
            <Route path={ROUTES.PROJECTS} element={<Projects />} />
            <Route path={ROUTES.PROJECT_PARTICIPANTS} element={<ProjectParticipants />} />
            <Route path={ROUTES.PROJECT_SNIPPY} element={<ProjectSnippy />} />
            <Route path={ROUTES.PROJECT_KSK} element={<ProjectKsk />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

