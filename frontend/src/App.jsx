
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



function App() {
 

  return (
    <>
     <div className='  bg-[#efe9f4]'>
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
