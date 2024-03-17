
import './App.css'
import Header from './Header'
import '../public/image/logo.png'
import Tech from './Tech'
import Prog from './Prog'
import { useState } from 'react'
import Footer from './Footer'

function App() {


    const [info, setInfo] = useState([])


    const handleInfo = tech => {

         const newInfo = [...info, tech]

         setInfo(newInfo)



    }


 

  return (
    <>
       
       <Header></Header>
       
       <div className=' flex justify-center gap-10'>
       <Tech handleInfo={handleInfo}  ></Tech>
       
       <Prog info={info}  ></Prog>
       </div>

       <Footer></Footer>



      
    </>
  )
}

export default App
