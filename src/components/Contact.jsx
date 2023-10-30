import { useState,useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from "../style"
import  {EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

//service ID:service_akipcyq
//connect to:shakokinyamba201@gmail.com
//template_xgyoanm
//public key:JanCYir95_5X4NXGG
//private key: qeEgcLejf9QWjIFNvLyMl


const Contact = () => {
  const formRef=useRef()
  const[form,setForm]=useState({
    name:"",
    email:"",
    message:""
  });
 const [loading,setLoading]=useState(false);

const handleChange=(e)=>{

  const {name,value}=e.target;
  setForm({...form,[name]:value});

}
const handleSubmit=(e)=>{
  e.preventDefault();
  setLoading(true);

  emailjs.send(
    'service_akipcyq',
    'template_xgyoanm',{
      from_name:form.name,
      to_name:"Benjamin",
      from_email:form.email,
      to_email:'shakokinyamba201@gmail.com',
      message:form.message
    },
    'JanCYir95_5X4NXGG'
    )
    .then(()=>{
      setLoading(false);
      formRef.current.reset();
      alert("Thank you I will get back to you sonn as possible !!")
      setForm({
        name:"",
        email:"",
        message:""
      })
    
    },(error)=>{
      setLoading(false);
      console.log(error)
      alert('Something went Wrong !!')
    })

}

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left','tween',0.2,1)}
        className="flex[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form 
            action="" 
            ref={formRef} 
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
        >
          <lable className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name ?"
                className="border-none font-semibold bg-tertiary py-4 px-6 placeholder:text-white rounded-lg outline-none"
              />
          </lable>
          <lable className="flex flex-col">
              <span className="text-white font-medium mb-4">Email Address</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your  email address"
                className="border-none font-semibold bg-tertiary py-4 px-6 placeholder:text-white rounded-lg outline-none"
              />
          </lable>
          <lable className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea rows={5}  name="message" value={form.message} onChange={handleChange} placeholder="text your message "
                className="border-none font-semibold bg-tertiary py-4 px-6 placeholder:text-white rounded-lg outline-none"
              />
          </lable>
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-full rounded-lg text-white font-bold shadow-md shadow-primary">
            {
              loading ? "...Send Message":"Send Message"
            }
          </button>
        </form>
      </motion.div>
      <motion.div 
          variants={slideIn('right','tween',0.2,1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")
