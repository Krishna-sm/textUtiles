import React from 'react'
import { useState } from 'react'

export default function Footer() {
    const [time,setTime]=useState(new Date().toLocaleTimeString());
    setTimeout(()=>{
        setTime(new Date().toLocaleTimeString())
    },1000)
  return (
    <div>
      <div className="container">
        <div className="">
            <p className="text-center">
                @krishna Agrawal 
            </p>
            <p className="text-center">
                {time} 
            </p>
        </div>
      </div>
    </div>
  )
}
