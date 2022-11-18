import Jobs from './components/Jobs'
import Search from './components/Search'
import Header from './containers/Header'
import SectionContainer from './containers/SectionContainer'
import './scss/main.scss'
function App() {
  return (
    <>
      <Header />
      <SectionContainer />
      <Search />
      <Jobs />
    </>
  )
}

export default App
