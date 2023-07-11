import React from 'react'
import {BsLinkedin , BsGithub , BsTwitter} from 'react-icons/bs';

const HeaderSocials = (socials) => {
    const {linkedin, github, twitter} = socials.socials;
  return (
    <div className="header__socials">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
            <BsGithub />
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
            <BsTwitter />
        </a>
    </div>
  )
}

export default HeaderSocials