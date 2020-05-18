import React, { Component } from 'react'

const Card = ({property}) => {
    const {index, href, title} = property;
    return(
        <div id={`card-${index}`} className="card">
<iframe width="560" height="315" 
src={href} 
frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h3>{title}</h3>
        </div>
    )
}
export default Card;
