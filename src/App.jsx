import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Comp from './components/Comp'
import Staff from './components/Staff'
import Faculty from './components/Faculty'
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four'
import Five from './components/Five'
import Six from './components/Six'
import Seven from './components/Seven'
import Eight from './components/Eight'
import Nine from './components/Nine'
import Ten from  './components/Ten'
import Gallery from './components/Gallery'
import Projects from './components/Projects'
import Completed from './components/Completed'
import Ongoing from './components/Ongoing'
import Achivements from './components/Achivements'
import Offer from './components/Offer'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/comp' element={<Comp />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/faculty' element={<Faculty/>}/>
          <Route path='/project' element={<Projects/>}/>
          <Route path='/ongoing' element={<Ongoing/>}/>
          <Route path='/completed' element={<Completed/>}/>
          <Route path='/achivements' element={<Achivements/>}/>
          <Route path='/offer' element={<Offer/>}/>
          <Route path='/One' element={<One/>}/>
          <Route path='/Two' element={<Two/>}/>
          <Route path='/Three' element={<Three/>}/>
          <Route path='/Four' element={<Four/>}/>
          <Route path='/Five' element={<Five/>}/>
          <Route path='/Six' element={<Six/>}/>
          <Route path='/Seven' element={<Seven/>}/>
          <Route path='/Eight' element={<Eight/>}/>
          <Route path='/Nine' element={<Nine/>}/>
          <Route path='/Ten' element={<Ten/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
