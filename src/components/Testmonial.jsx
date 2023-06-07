import React from 'react'
import { motion, transform } from 'framer-motion'

const Testmonial = () => {
const ani = {
  first:{
    whileInView:{
      x:0,
      opacity:1,
     
    },
    initial:{
      x:"-100%",
      opacity:0,
     
    }
  },
  two:{
    whileInView:{
      y:0,
      x:0,
      opacity:1,
     
    },
    initial:{
      y:"-50%",
      opacity:0,
     
    }
  }
}

  return (
    <>
     <div id="testimonial">
        <h2>Testmonial</h2>
        <section>
         
          
          <TestmonialCard ani={ani.first} name={"Vipu Rajput"} feedback={"Your Programing skills so good.."}/>
        

          <TestmonialCard ani={ani.two} name={"Aman Gupta"} feedback={"  I like your Projects Well Done Bro..."}/>
          <TestmonialCard ani={ani.first} name={"Sushant Sharma"} feedback={"Wow What a Portfolio. I can't Imagine in my mind.."}/>
        </section>
     </div>
    </>
  )

  
}

const TestmonialCard = ({name,feedback,ani}) =>(
   <motion.article {...ani}>
   
      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
      <h4>{name}</h4>
      <p>{feedback}</p>
    
   </motion.article>
  )
export default Testmonial
