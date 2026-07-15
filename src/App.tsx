import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ROUTES } from './routes'

import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1">
          <Routes>
            <Route path={ROUTES.HOME} element={<LandingPage />} />
            <Route path={ROUTES.PROJECTS} element={<Projects />} />
            <Route path={ROUTES.PROJECT_DETAIL} element={<ProjectDetail />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
