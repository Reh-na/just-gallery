import React from 'react'
import TriangleShadow from './TriangleShadow'
import './gallery.css'
import SingleCard from './SingleCard';
import 'animate.css';
function gallery() {
  const images=[
    {src:'/images/v1.jpg'},
    {src:'/images/v2.jpg'},
    {src:'/images/v3.jpg'},
    {src:'/images/v4.jpg'},
    {src:'/images/v5.jpg'},
    {src:'/images/v6.jpg'},

    {src:'/images/v7.jpg'},
    {src:'/images/v8.jpg'},
    {src:'/images/v9.jpg'},
    {src:'/images/v10.jpg'},
    {src:'/images/v11.jpg'},
    {src:'/images/v12.jpg'},
    {src:'/images/v13.jpg'},
    {src:'/images/v14.jpg'},
    {src:'/images/v15.jpg'},
    {src:'/images/v16.jpg'},
  ]
  return (
    <div className='w-full bg-[#F3F0CF]'>
<TriangleShadow/>
        <div
    className="parallax-object2 hidden-sm hidden-xs skrollable skrollable-after"
    data-0="opacity:1;"
    data-start="margin-top:40%"
    data-100="transform:translatey(0%);"
    data-center-center="transform:translatey(-180%);"
    style={{
      transform: 'translateY(0%)',
      opacity: 1,
    }}
  > 
    <img src="/images/parallaxobject2.png" className=' w-3/12 md:w-2/12 lg:w-2/12 mt-[-22%] md:mt-[-8%] lg:mt-[-8%]' alt="" />
  <div className='flex justify-center items-center w-full  '>

<div className=''id='headgallery  w-3/12'>
<div className='text-center mt-[-40px] sm:mt-[-50px] md:mt-[-100px] lg:mt-[-200px]'>
<i class="fa-solid fa-people-pulling fa-beat fa-2xl  " style={{color: '#EC9600'}}></i>    
</div> 
  <h2 className=' bg-[#d12881]  w-full border-none rounded-[50%]  p-4 sm:p-7 md:p-7 lg:p-7   text-center text-white text-sm sm:text-3xl md:text-3xl lg:text-3xl font-bold'>Our Gallery</h2>
</div>
  </div>
  </div>
<div className='mt-0 animate__animated animate__backInLeft'>  <SingleCard images={images} /></div>
    </div>
  )
}

export default gallery