import { useState } from 'react'
import './App.css'
import {BsSun} from 'react-icons/bs'
import {BsMoon} from 'react-icons/bs'
import {BsFillPersonFill} from 'react-icons/bs'

function App() {

  const [isClicked,setIsClicked]=useState(false)
  const [isDarkened,setIsDarkened]=useState(false)


  if(isDarkened){
    document.body.classList.add('dark')
  }else{
    document.body.classList.remove('dark')
  }

  return (
    <>
    <section className='darkMode-container'>
      <BsSun className='darkmode-logo'/>
      <div className='darkMod-bar'>
        <div className={isDarkened ? 'barCircle dark' :'barCircle'}
        onClick={()=>setIsDarkened(!isDarkened)}
        ></div>
      </div>
      <BsMoon className='darkmode-logo'/>
    </section>
    {/* <section className='flipCard-container'>
      
    </section> */}
     <section className='flipCard-container'
     onClick={()=>setIsClicked(!isClicked)}
     >
      <div className={isClicked ? 'flipCard flipCard-clicked' : 'flipCard'}>
        <div className="flipCard-front">
          <BsFillPersonFill className='person'/>
          <h2 className='person-name'>Enter Your Name</h2>
          <div className='person-job'>Junior Front-End Developer</div>
        </div>
        <div className="flipCard-back">
          <div className='message'>wishing you the very best in what lies ahead</div>
        </div>
      </div>
    </section> 
    </>
  )
}

export default App
