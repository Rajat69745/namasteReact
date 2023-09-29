
import React from 'react'
import  ReactDOM  from 'react-dom/client'
import './index.css'
import Header from './src/components/Header'
import Body from './src/components/Body'

// const heading= React.createElement('h1',{id:'heading', alpha:'abc'}
// ,'namaste op1aaaaaaaaqqqwwsswwaa'
// )

// console.log(heading)



// const Header=()=>{

//      return(
//     <div className='header'>
//     <div className='logo'>
//         <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png" alt=""/>
//     </div>

// <div className='navItems'>

//   <ul>
//     <li>HOME</li>
//     <li>ABOUT US</li>
//     <li>CONTACT US</li>
//     <li>CART</li>
//   </ul>
    
// </div>
//     </div>)
// }
// const swiggyData=[


//     {image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi', restoName:'Meghana Food', price:'300', veg:false, rating:4.5 , key:0  },
      
//     {image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/qltgnkyywuo5gmnpqzbm', restoName:'Hotel Empire', price:'390', veg:false, rating:3.9 ,  key:1},

//     {image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cd832b6167eb9f88aeb1ccdebf38d942', restoName:'Truffles', price:'700', veg:true, rating:2, key:2 },

      
//     {image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fjqcvqfgqlw6h0atques', restoName:'Dominos', price:'200', veg:true, rating:4, key:3 },

      
//     {image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf', restoName:'Burger King', price:'100', veg:false, rating:3, key:4 },

      
//     {image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/o2rwujynxk8vhkbtdtvb', restoName:'Corner House', price:'350', veg:true, rating:5, key:5 },

      


// ]

// const  RestoCard=({resName,img, price, rating})=>{
//     return(

//         <div className='res-card'>
//         <img src={img} alt=""/>
//     <div>
   
//         <h4>{resName}</h4>
//       <h5>${price}</h5>
//         <h5>{rating} rating</h5>
                 
//     </div>
//         </div>
//     )
// }

// const Body=()=>{

//     return(

//     <div className='body'>

//         <div className='searchBar'>
//             <h4>Search</h4>
//         </div>

//         <div className='resContainer'>

//             {swiggyData.map((el)=>(
//      <RestoCard  key={el.key} resName={el.restoName} price={el.price} img={el.image} rating={el.rating} />

//             ))}
       
            
            
//         </div>
//     </div>
//     )


// }

const AppLayout=()=>{

    return (
<div >                            
        <Header/>
        <Body/>
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout/>)