import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../style';
import { navLinks } from '../constantes';
import {logoben,menu,close} from '../assets'


const Navbar = () => {
// variables
const [active,setActive]=useState("")
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link to={'/'} className='flex items-center gap-2' onClick={()=>{
              setActive("");
              window.scrollTo(0,0);
          }}>
              <img src={logoben} className='w-24 h-24 object-contain  '/>
          </Link>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
              {
                navLinks.map((link)=>(
                  <li key={link.id} 
                    className={`${active===link.title ? "text-white":"text-secondary"} hover:text-white text-[18px] cursor-pointer font-medium` }
                    onClick={()=>setActive(link.title)}
                    >
                    <a href={`#${link.id}`}>{link.title}</a>
      
                  </li>
                ))
              }
          </ul>
      </div>
    </nav>
  )
}

export default Navbar