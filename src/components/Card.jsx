import React, { Children } from 'react';
export const Card = ({ title, imgUrl, children }) => {
  return (
    <div className="card-container">
      {imgUrl && <img src={imgUrl} alt='feature icon'/>}
      {title && <h1 className='features-list-title'>{title}</h1>}
      {children}
    </div>
  )
}