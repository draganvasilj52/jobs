import './scss/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './containers/Header/index'
import JobDetail from './pages/JobDetail'
import Company from './pages/Company'
import AboutCompany from './pages/AboutCompany'
import OpenPositions from './pages/OpenPositions'
import Auth from './pages/Auth'
import Experiences from './pages/Experiences'
import PublicRoute from './components/PublicRoute'
import LeaveImpression from './pages/LeaveImpression'
import Error from './pages/Error'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="job/:companyName/:jobId" element={<JobDetail />} />
        <Route path="company/:companyName" element={<Company />}>
          <Route index element={<AboutCompany />} />
          <Route path="open-positions" element={<OpenPositions />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="interviews" element={<p>interviews</p>} />
        </Route>
        <Route
          path="auth"
          element={
            <PublicRoute>
              <Auth />
            </PublicRoute>
          }
        />
        <Route path="leave-impression" element={<LeaveImpression />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
