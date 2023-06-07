import React from 'react'
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp} from "react-icons/ai"
import f1 from "../asset/f2.jpeg"
import { motion, transform } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer id='footer'>

        <motion.div initial={{y:"40%",opacity:0}} whileInView={{y:0,opacity:1}}>
            <img src={f1} alt="" />

            <h2>Pratik Sarvaiya</h2>
            <p>Motivation is temporary but discipline last forever..</p>

        </motion.div>

        <motion.aside initial={{y:"40%",opacity:0}} whileInView={{y:0,opacity:1}}>
            <h2>Social Media</h2>
            <article>
                <a href="https://www.youtube.com/@spcreation4300"><AiFillYoutube/><span>You Tube</span></a>
                <a href="https://www.instagram.com/pratiksaravaiya/?igshid=YmMyMTA2M2Y%3D"><AiFillInstagram/><span>Instagram</span></a>
                <a href="https://www.facebook.com/pratik.saravaiya?mibextid=ZbWKwL"><AiFillFacebook/><span>Facebook</span></a>
                <a href=""><AiFillGithub/><span>GitHub</span></a>
            </article>
        </motion.aside>

        

       <a href="#home"><AiOutlineArrowUp/></a>
       

    </motion.footer>
  )
}

export default Footer
