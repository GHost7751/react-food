import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import { Header } from './Layout/Header'
import { Footer } from './Layout/Footer'
// import {Preloader} from './components/Preloader'
import { Home } from '../src/pages/Home'
import {Movie} from '../src/pages/Movie'
import {Series} from '../src/pages/Series'
import { All } from './pages/All'





function App() {
  return <>
      <Router >
    <Header />
      <main className='container content'> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Movie' component={Movie} />
          <Route path='/Series' component={Series} />
          <Route path='/All' component={All} />
        </Switch>
      </main>
    <Footer />
      </Router>
  
  </> 
}

export default App;