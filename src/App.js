import Jobs from './components/Jobs'
import Search from './components/Search'
import Header from './containers/Header'
import SectionContainer from './containers/SectionContainer'
import './scss/main.scss'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <SectionContainer />
      <Search />
      <Jobs />
    </BrowserRouter>
  )
}

export default App
