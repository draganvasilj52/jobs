import './scss/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './containers/Header/index'
import JobDetail from './pages/JobDetail'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:jobId" element={<JobDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
