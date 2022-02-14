import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import { Header } from './Layout/Header'
import { Footer } from './Layout/Footer'
// import {Preloader} from './components/Preloader'
import { Home } from '../src/pages/Home'
import { All } from './pages/All'





function App() {
  return <>
      <Router >
    <Header />
      <main className='container content'> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/All' component={All} />
        </Switch>
      </main>
    <Footer />
      </Router>
  
  </> 
}

export default App;