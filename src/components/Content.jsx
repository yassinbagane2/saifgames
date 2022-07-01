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
            𝖠 𝟤𝟤𝗒 𝖯𝖺𝗌𝗌𝗂𝗈𝗇𝖺𝗍𝖾 𝖲𝖾𝗅𝖿 𝖳𝖺𝗎𝗀𝗁𝗍 𝖨𝗇𝖽𝗂𝖾 𝖦𝖺𝗆𝖾 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋 𝗐𝗂𝗍𝗁 𝟤𝗒 𝗈𝖿 𝖤𝗑𝗉𝖾𝗋𝗂𝖾𝗇𝖼𝖾 𝖬𝖺𝗄𝗂𝗇𝗀 𝟤𝖣 𝖦𝖺𝗆𝖾𝗌 𝗎𝗌𝗂𝗇𝗀 𝖳𝗁𝖾 𝖴𝗇𝗂𝗍𝗒𝟥𝖽 𝖦𝖺𝗆𝖾 𝖤𝗇𝗀𝗂𝗇𝖾, 𝖬𝖺𝗄𝗂𝗇𝗀/𝖳𝖾𝖺𝖼𝗁𝗂𝗇𝗀 𝟤𝖣 𝖦𝖺𝗆𝖾 𝖠𝗋𝗍 𝗐𝗂𝗍𝗁 𝖯𝗁𝗈𝗍𝗈𝗌𝗁𝗈𝗉 𝗈𝗇 𝖴𝖽𝖾𝗆𝗒/𝖲𝗄𝗂𝗅𝗅𝗌𝗁𝖺𝗋𝖾 𝖠𝗇𝖽 𝖺𝗇 𝖨𝗇𝗌𝗍𝗋𝗎𝖼𝗍𝗈𝗋 𝗈𝗇 𝗍𝗁𝖾 𝖳𝖾𝖼𝗁𝖨𝗇𝗏𝖾𝗇𝗍𝗈𝗋𝗌 𝖲𝗍𝖺𝗋𝗍𝗎𝗉 𝖺𝗇𝖽 𝗍𝗁𝖾 𝖬𝗂𝖼𝗋𝗈𝗌𝗈𝖿𝗍 𝖨𝗌𝗌𝖺𝗍𝖲𝗈 𝖢𝗅𝗎𝖻.
            𝖬𝗒 𝗀𝗈𝖺𝗅 𝗂𝗌 𝗍𝗈 C𝗋𝖾𝖺𝗍𝖾 𝗈𝗇𝖾 𝗈𝖿 𝗍𝗁𝖾 B𝖾𝗌𝗍 I𝗇𝖽𝗂𝖾 𝟤𝖣 𝗀𝖺𝗆𝖾𝗌 𝗈𝖿 𝖺𝗅𝗅 𝗍𝗂𝗆𝖾 𝖿𝗈𝗋 𝖺𝗅𝗅 P𝗅𝖺𝗍𝖿𝗈𝗋𝗆𝗌 𝖼𝖺𝗎𝗌𝖾 𝗍𝗁𝖺𝗍'𝗌 𝗐𝗁𝖺𝗍 𝗐𝖾 𝖽𝗈 𝗋𝗂𝗀𝗁𝗍 ? 𝖶𝖾 𝖻𝗎𝗂𝗅𝖽 𝗐𝗈𝗋𝗅𝖽𝗌, B𝗋𝗂𝗇𝗀 𝖼𝗁𝖺𝗋𝖺𝖼𝗍𝖾𝗋𝗌 𝗍𝗈 𝗅𝗂𝖿𝖾 𝗍𝗁𝗋𝗈𝗎𝗀𝗁 𝖺 S𝗍𝗈𝗋𝗒 𝗍𝗁𝖺𝗍 𝖽𝗋𝗂𝗏𝖾𝗌 𝗎𝗌 𝖿𝗈𝗋𝗐𝖺𝗋𝖽 𝖡𝖴𝖳 𝗆𝗈𝗌𝗍 𝗂𝗆𝗉𝗈𝗋𝗍𝖺𝗇𝗍𝗅𝗒 𝗂𝗌 𝗍𝗁𝖺𝗍 𝗐𝖾 M𝖺𝗄𝖾 𝖺 B𝗂𝗀 S𝗆𝗂𝗅𝖾 𝗈𝗇 𝗈𝗎𝗋 G𝖺𝗆𝖾𝗋𝗌 F𝖺𝖼𝖾𝗌 𝖺𝗇𝖽 𝗍𝗁𝖺𝗍 𝗐𝗂𝗅𝗅 𝗆𝖺𝗄𝖾 A𝗅𝗅 T𝗁𝖾 D𝗂𝖿𝖿𝖾𝗋𝖾𝗇𝖼𝖾. 
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