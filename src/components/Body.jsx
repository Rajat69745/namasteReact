
import React from "react"
import RestoCard from "./RestoCard"
let swiggyData=[


    {image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi', restoName:'Meghana Food', price:'300', veg:false, rating:4.5 , key:0  },
      
    {image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/qltgnkyywuo5gmnpqzbm', restoName:'Hotel Empire', price:'390', veg:false, rating:3.9 ,  key:1},

    {image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cd832b6167eb9f88aeb1ccdebf38d942', restoName:'Truffles', price:'700', veg:true, rating:2, key:2 },

      
    {image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fjqcvqfgqlw6h0atques', restoName:'Dominos', price:'200', veg:true, rating:4, key:3 },

      
    {image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf', restoName:'Burger King', price:'100', veg:false, rating:3, key:4 },

      
    {image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/o2rwujynxk8vhkbtdtvb', restoName:'Corner House', price:'350', veg:true, rating:5, key:5 },

      


]

const Body=()=>{
const [filterData, setFilterData]= React.useState(swiggyData)


     
    return(

    <div className='body'>

        <div className='searchBar'>
            <h4>Search</h4>
        </div>

        <button  className="filter-btn" onClick={()=>{

            swiggyData=swiggyData.filter((el)=>(

              

el.rating>4
            ))
            setFilterData(swiggyData)

            console.log(swiggyData)
        }}>Top Rated Resto</button>

        <button onClick={()=>{setFilterData(filterData)}}>all resto</button>

        <div className='resContainer'>

            {filterData.map((el)=>(
     <RestoCard  key={el.key} resName={el.restoName} price={el.price} img={el.image} rating={el.rating} />

            ))}
       
            
            
        </div>
    </div>
    )


}
export default Body