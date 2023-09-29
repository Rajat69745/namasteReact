
import React from "react"


const  RestoCard=({resName,img, price, rating})=>{
    return(

        <div className='res-card'>
        <img src={img} alt=""/>
    <div>
   
        <h4>{resName}</h4>
      <h5>${price}</h5>
        <h5>{rating} rating</h5>
                 
    </div>
        </div>
    )
}
export default RestoCard