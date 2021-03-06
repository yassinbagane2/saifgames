import React, {useRef, useState} from 'react'
import Typist from 'react-typist'
import './UI/Content.css'
import hero from '../images/hero.svg'
import lastsoul from '../images/last soul.jpg'
import lastGalaxy from '../images/last galaxy.png'
import lastJump from '../images/square.png'
import cover1 from '../images/cover1.jpg'
import cover2 from '../images/cover2.jpg'
import {contactSchema} from '../validations/ContactValidation'
import Message from './UI/Message'
const Banner = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();


  const closeModalHandler = () => {
    setShowModal(!showModal);
  }
  const [showModal,setShowModal] = useState(false);
  const [isValid,setValide] = useState('');
  const submitHandler = async (e) => {
    e.preventDefault();
    let formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    }
  
    const validate = await contactSchema.isValid(formData)
    if (validate) {
      setValide('Email Was Sent Succesfully.')
    } else {
      setValide('Please Enter A Valid Data.')
    }
    closeModalHandler();
  }

  return (
    <div className='content' id='home'>   
      <div className="welcome">
        <h1><Typist>Hi There I'm Saif Touzi.</Typist></h1>
      </div>
      <img src={hero} alt="hero" />
      <div className='about-me'>
        <p>&lt;h2&gt;</p>
        <h2 className='section-tag'>Me, Myself And I</h2>
        <p>&lt;h2/&gt;</p>
        <p>&lt;p&gt;</p>
          <div className='summary'>
            π  π€π€π π―πΊππππππΊππΎ π²πΎππΏ π³πΊππππ π¨ππ½ππΎ π¦πΊππΎ π£πΎππΎππππΎπ ππππ π€π ππΏ π€πππΎπππΎππΌπΎ π¬πΊππππ π€π£ π¦πΊππΎπ πππππ π³ππΎ π΄πππππ₯π½ π¦πΊππΎ π€πππππΎ, π¬πΊππππ/π³πΎπΊπΌππππ π€π£ π¦πΊππΎ π ππ ππππ π―ππππππππ ππ π΄π½πΎππ/π²πππππππΊππΎ π ππ½ πΊπ π¨ππππππΌπππ ππ πππΎ π³πΎπΌππ¨πππΎπππππ π²ππΊππππ πΊππ½ πππΎ π¬ππΌπππππΏπ π¨πππΊππ²π π’πππ».
            π¬π πππΊπ ππ ππ CππΎπΊππΎ πππΎ ππΏ πππΎ BπΎππ Iππ½ππΎ π€π£ ππΊππΎπ ππΏ πΊππ ππππΎ πΏππ πΊππ PππΊππΏππππ πΌπΊπππΎ πππΊπ'π πππΊπ ππΎ π½π πππππ ? πΆπΎ π»ππππ½ πππππ½π, Bππππ πΌππΊππΊπΌππΎππ ππ πππΏπΎ πππππππ πΊ Sππππ πππΊπ π½ππππΎπ ππ πΏππππΊππ½ π‘π΄π³ ππππ πππππππΊππππ ππ πππΊπ ππΎ MπΊππΎ πΊ Bππ SππππΎ ππ πππ GπΊππΎππ FπΊπΌπΎπ πΊππ½ πππΊπ ππππ ππΊππΎ Aππ TππΎ DππΏπΏπΎππΎππΌπΎ. 
            <a href="#contact">Let's Make Something Special.</a>
          </div>
        <p>&lt;p/&gt;</p>
      </div>

      <div className='myskills' id='projects'>
        <p>&lt;h2&gt;</p>
          <h2 className='section-tag'>My Projects</h2>
        <p>&lt;h2/&gt;</p>
        <div className="skills">
          <ul>
            <li>
              <img src={lastGalaxy} alt="last galaxy" />
              <h2><a href="https://saifgames.itch.io/last-galaxy?fbclid=IwAR06qk_3IMy7vUtYl_sXURXdnSemTPB3KZRp4APXXhWsWZK4cUFvjLT6vLo" rel='noreferrer' target="_blank">Last Galaxy Trial</a></h2>
              <p>This is a short 5 levels with a Boss Fight Demo of a 2D Side Scrolling Action Space Shooter, Hope you enjoy it!</p>
              <button><a href="https://saifgames.itch.io/last-galaxy?fbclid=IwAR06qk_3IMy7vUtYl_sXURXdnSemTPB3KZRp4APXXhWsWZK4cUFvjLT6vLo" rel='noreferrer' target="_blank">DEMO</a></button>
            </li>
            <li>
              <img src={lastJump} alt="last jump" />
              <h2><a href="https://saifgames.itch.io/last-jump?fbclid=IwAR3KIVkYLCB0zFYcwmjRGcD5D4103lZS6557jHScKNNAMF3j3q6P7YJIaWg" rel='noreferrer' target="_blank">Last Jump Trial</a></h2>
              <p>2D Hyper Casual Game Made in 48h using Unity3D and C# !</p>
              <button><a href="https://saifgames.itch.io/last-jump?fbclid=IwAR3KIVkYLCB0zFYcwmjRGcD5D4103lZS6557jHScKNNAMF3j3q6P7YJIaWg" rel='noreferrer' target="_blank">DEMO</a></button>
            </li>
            <li>
              <img src={lastsoul} alt="last soul" />
              <h2><a href="https://saifgames.itch.io/last-soul?fbclid=IwAR1gIeiPxaOm3fN4OPt5K6dvYew-HNpJGRNVIWky4vsRPeLHwCdFS9a1p0Q" rel='noreferrer' target="_blank">Last Souls Trial</a></h2>
              <p>A Puzzle Platformer made in 48h for the global game jam which weather you can control the character or his soul to avoid obstacles and reached the end level!</p>
              <button><a href="https://saifgames.itch.io/last-soul?fbclid=IwAR1gIeiPxaOm3fN4OPt5K6dvYew-HNpJGRNVIWky4vsRPeLHwCdFS9a1p0Q" rel='noreferrer' target="_blank">DEMO</a></button>
            </li>
          </ul>
        </div>
      </div>
      <div className="courses" id='courses'>
        <p>&lt;h2&gt;</p>
          <h2 className='section-tag'>Courses I've Made</h2>
        <p>&lt;h2/&gt;</p>
        <ul>
            <li>
              <img src={cover1} alt="course 1" />
              <h2><a href="https://www.udemy.com/course/learn-2d-game-environments-graphic-design-for-beginners/?referralCode=517706DEEC32B8043858&fbclid=IwAR1xdTn1c5EbU-6J3_JlWc69qco2_7wHZzFWVynaZ1qFw0z48GE3rik3DHs" rel='noreferrer' target="_blank">Learn 2D Game Environments Graphic Design For Beginners</a></h2>
              <p>Learn how you can create Digital 2D Game Art Environments quickly in Photoshop!</p>
              <button><a href="https://www.udemy.com/course/learn-2d-game-environments-graphic-design-for-beginners/?referralCode=517706DEEC32B8043858&fbclid=IwAR1xdTn1c5EbU-6J3_JlWc69qco2_7wHZzFWVynaZ1qFw0z48GE3rik3DHs" rel='noreferrer' target="_blank">CHECK</a></button>
            </li>
            <li>
              <img src={cover2} alt="course 2" />
              <h2><a href="https://www.udemy.com/course/learn-2d-game-backgrounds-graphic-design-for-beginners/?referralCode=AF93939EFF36A9D7AA1E&fbclid=IwAR3DKmPVPGSyK-6lTJIT4KZPtd1Siblap3zMDv7q9rYic-Xh_vzwTsSKz-w" rel='noreferrer' target="_blank">Learn 2D Game Backgrounds Graphic Design For Beginners</a></h2>
              <p>Learn how you can create Digital 2D Game Art Backgrounds quickly in Photoshop!</p>
              <button><a href="https://www.udemy.com/course/learn-2d-game-backgrounds-graphic-design-for-beginners/?referralCode=AF93939EFF36A9D7AA1E&fbclid=IwAR3DKmPVPGSyK-6lTJIT4KZPtd1Siblap3zMDv7q9rYic-Xh_vzwTsSKz-w" rel='noreferrer' target="_blank">CHECK</a></button>
            </li>
        </ul>
      </div>

      <div className="contact" id='contact'>
        <h2>Contact ME</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name">FULL NAME</label>
            <input type="text" id='name' placeholder='Enter Your Name' ref={nameRef} autoComplete="off"/>
            
            <label htmlFor="email">E-mail</label>
            <input type="email" id='email'  ref={emailRef} placeholder='Enter Your Email'/>
  
            <label htmlFor="message">MESSAGE</label>
            <textarea name="message" id="message" ref={messageRef} cols="80" rows="20"></textarea>
          </div>
          <div className='form-btn'>
            {!showModal && <button type='submit' onClick={submitHandler}>Send</button>}
          </div>
        </form>
        {showModal && <Message message= {isValid} closeHandler = {closeModalHandler} />}

      </div>
      
      <footer>
        <h3>Developed By <a href="https://www.linkedin.com/in/yassin-bagane-6176531b7/" rel='noreferrer' target="_blank">Yassin Bagane</a></h3>
        <a href="#home"><i class="fa-solid fa-arrow-up"></i></a>
      </footer>
    </div>
  )
}

export default Banner