import React from 'react'
import signupImage from '../assets/signup.png'
import Template from '../components/Template'
function Signup({setIsLoggedIn}) {
  return (
    <div>
        <Template
        title="Join the millions learing to code with studynotion for free "
        desc1="Build skills for today, tomorrow and beyond"
        desc2="Education to future-proof your carreer"
        image={signupImage}
        formtype='signup'
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup;