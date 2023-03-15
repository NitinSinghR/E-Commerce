import React, { useState } from 'react'
import list from '../data';
import '../styles/Amazon.css';

const Amazon = ({handleClick}) => {
    
    const [type,setChange]=useState("");

  return (
    <>
        <div className='filterProduct'>
            <button onClick={()=>setChange("unisex")}>Unisex</button>
             <button onClick={()=>setChange("Trending")}>Trending</button>
             <button onClick={()=>setChange("Oversized")}>Chunky</button>
             <button onClick={()=>setChange("all")}>All</button>
        </div>
        <section>
        {
            list.filter( i => {
                if(type ==='all'){
                    return i;
                }else if(i.type.includes(type)){
                    console.log(type);
                    return i;
                }
            }).map((item) => (
                <div className="cards" key={item.id}>
                <div className='image_box'>
                    <img src={item.img} alt="hello"/>
                </div>
                <div className='details'>
                    <p>{item.title}</p>
                    <p>Price-{item.price}Rs</p>
                    <button onClick={() =>handleClick(item)}>Add to Cart</button>
                </div>
            </div> 
            ))
        }
        </section>
   </> 
  )
}

export default Amazon
