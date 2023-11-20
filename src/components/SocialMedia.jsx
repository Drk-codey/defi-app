import React from 'react';
import { Card } from './Card';
import discord from "../assets/discord2.svg";
import youtube from "../assets/youtube2.svg";
import paper from "../assets/paper.svg";
import blog from "../assets/blog.svg";

 
const SocialMedia = () => {
  return (
    <div className='social-media-container'>
      <Card>
        <>
        <div className="social-media-promotion-text">
          <h2>
            <span className="hightlighted">Join</span> Our community
          </h2>
        </div>
        <div className="social-media-promotion-icons">
          <a href="/">
            <img src={discord} alt="discord" />
          </a>
          <a href="/">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="/">
            <img src={paper} alt="white paper" />
          </a>
          <a href="/">
            <img src={blog} alt="blog" />
          </a>
        </div>
        </>
      </Card>
    </div>
  )
}
 
export default SocialMedia;
 