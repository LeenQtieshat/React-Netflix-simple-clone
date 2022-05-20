import { useEffect, useState } from "react"
import "./Nav.css"


export default () =>{
  const [flag ,setFlag] = useState(false)
  useEffect(()=>{
   window.addEventListener("scroll",()=>{
      
      window.scrollY > 100 ?  setFlag(true) : setFlag(false)
   }) 
        
   return () => window.removeEventListener("scroll",null)
},[])  

 
  
    return <nav className={`navbar ${flag && "navbar__black"}`}>
     
        <img className="nav__logo" src="Logonetflix.png"></img>
        <img className="nav__avatarLogo" src="Netflix-avatar.png"></img>
    </nav>
}