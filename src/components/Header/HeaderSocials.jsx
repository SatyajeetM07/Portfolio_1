import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/satyajeet-mazumdar-1350b1211/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/SatyajeetM07" target='_blank'><BsGithub/></a>
        <a href="https://instagram.com/__.satyaaaaa.__?igshid=NTc4MTIwNjQ2YQ==" target='_blank'><BsInstagram/></a>

        
    </div>
  )
}

export default HeaderSocials