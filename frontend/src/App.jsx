
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Blogform from './Components/blogform'
import Blog from './Components/Blog'
import NewPage from './Components/newpage'
import axios from 'axios'
// axios.defaults.baseURL = 'http://127.0.0.1:3001';
// axios.defaults.withCredentials = true

function App() {
 

  return (
    <>
     <div className='  bg-[#1d1d1d]'>
      <Router> 
        <Header />
        <Routes>   
        
          <Route path='/Home' element={<Home/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/> 
          <Route path='/Blogform' element={<Blogform/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/NewPage/:id' element={<NewPage/>}/>
         

         
        </Routes>
     
<Footer/>
        
      </Router>
     </div>
    </>
  )
}

export default App
