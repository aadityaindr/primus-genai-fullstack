import { SignUp } from '@clerk/clerk-react'
import './signUpPage.css'

const SignUpPage = () => {
  return (
    <div className='signUpPage'>
      <SignUp Page='/sign-up'/>
    </div>
  )
}

export default SignUpPage