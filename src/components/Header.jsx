import React from "react"




const Header = ({menuOpen,setMenuopen}) => {
 
  return (
    <>
    
        <nav>
            <NavContent/>
       
            <i className={`${!menuOpen?"hum":"activehum"}`} onClick={()=>setMenuopen(!menuOpen)}></i>
            

        </nav>
        {/* <button className="navBtn" onClick={()=>setMenuopen(!menuOpen)}> */}
        {/* </button> */}
       
    </>
  )
}

export const MyNav = ({menuOpen,setMenuopen})=>{

return(<div className={`phonenav ${menuOpen?"navPhoneCome":""}  `}>
   <h2>PORTFOLIO</h2>
        <div>
            <a href="#home" onClick={()=>setMenuopen(false)} >Home</a>
            <a href="#work" onClick={()=>setMenuopen(false)}>Work</a>
            <a href="#timeline" onClick={()=>setMenuopen(false)}>Timeline</a>
            <a href="#services" onClick={()=>setMenuopen(false)}>Services</a>
            <a href="#testimonial" onClick={()=>setMenuopen(false)}>Testimonial</a>
            <a href="#contact" onClick={()=>setMenuopen(false)}>Contact</a>
        </div>


        <a href="mailto:pratikrajput125@gmail.com">
            <button>Email</button>
        </a>
  </div>)
}

export const NavContent = () =>(
    <>
        <h2>PORTFOLIO</h2>
        <div>
            <a href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#timeline">Timeline</a>
            <a href="#services">Services</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#contact">Contact</a>
        </div>


        <a href="mailto:pratikrajput125@gmail.com">
            <button>Email</button>
        </a>
    </>
)


export default Header
