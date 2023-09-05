import React from 'react'
import img1 from "../imgs/3.jpg"
import img2 from "../imgs/1.jpg"
import img3 from "../imgs/2.jpg"
import img4 from "../imgs/4.jpg"
import img5 from "../imgs/5.jpg"
import img6 from "../imgs/6.jpg"

const Home = () => {
  return (
    <>
  
      <section class="text-gray-600 body-font bg-gray-50 mb-4">
        
  <div class="container px-5 py-16 mx-auto flex flex-wrap">
  <div class="flex flex-col text-center w-full mb-5">
      <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-orange-500">Plan Your Wedding Here</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed italic font-semibold">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div class="lg:w-2/3 mx-auto">
      <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <img alt="gallery" class="w-full object-cover h-full object-left-bottom block opacity-50 absolute inset-0" src={img1}/>
        <div class="text-center relative z-10 w-full">
          <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">Heavy Mala</h2>
         
          <a class="mt-3 cursor-pointer text-white inline-flex items-center font-semibold bg-orange-400 p-1.5 rounded-md hover:border border-orange-500  hover:text-orange-500 hover:bg-white">Click Here
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-wrap -mx-2">
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full md:object-right-bottom block opacity-50  absolute inset-0" src={img2}/>
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Medium Mala</h2>
             
              <a class="mt-3 cursor-pointer text-white inline-flex items-center font-semibold bg-orange-400 p-1.5 rounded-md hover:border border-orange-500  hover:text-orange-500 hover:bg-white">Click Here 
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>            </div>
          </div>
        </div>
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full md:object-right-bottom block opacity-50  absolute inset-0" src={img3}/>
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Light Mala</h2>
              <a class="mt-3 cursor-pointer text-white inline-flex items-center font-semibold bg-orange-400 p-1.5 rounded-md hover:border border-orange-500  hover:text-orange-500 hover:bg-white">Click Here
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="text-gray-600 body-font bg-gray-50 ">
  <div class="container px-5 py-10 mx-auto ">
  <h1 class="sm:text-3xl text-2xl font-semibold underline title-font mb-10  flex justify-center text-orange-500">Featured Products</h1>
    <div class="flex flex-wrap -m-4 gap-10 justify-center">
      
      <div class="lg:w-[18vmax] md:w-1/2 p-6 w-full shadow-md cursor-pointer">
        <a class="block relative h-[20vmax]w-[15vmax] rounded p-2 overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center  h-full" src={img6}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Heavy mala</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">sada</h2>
          <p class="mt-1">Rs.500</p>
        </div>
      </div>
      <div class="lg:w-[18vmax] md:w-1/2 p-6 w-full shadow-md cursor-pointer">
        <a class="block relative h-[20vmax]w-[15vmax] rounded p-2 overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center  h-full" src={img6}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Heavy mala</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Pyoul sikri</h2>
          <p class="mt-1">Rs.500</p>
        </div>
      </div>
      <div class="lg:w-[18vmax] md:w-1/2 p-6 w-full shadow-md cursor-pointer">
        <a class="block relative h-[20vmax]w-[15vmax] rounded p-2 overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center  h-full" src={img6}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Heavy mala</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Sikri</h2>
          <p class="mt-1">Rs.500</p>
        </div>
      </div>
      <div class="lg:w-[18vmax] md:w-1/2 p-6 w-full shadow-md cursor-pointer">
        <a class="block relative h-[20vmax]w-[15vmax] rounded p-2 overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center  h-full" src={img4}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Heavy mala</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Sikri</h2>
          <p class="mt-1">Rs.500</p>
         
        </div>
      </div>
      <div class="lg:w-[18vmax] md:w-1/2 p-6 w-full shadow-md cursor-pointer">
        <a class="block relative h-[20vmax]w-[15vmax] rounded p-2 overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center  h-full" src={img2}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Heavy mala</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Sikri</h2>
          <p class="mt-1">Rs.500</p>
        </div>
      </div>
      <div class="lg:w-[18vmax] md:w-1/2 p-6 w-full shadow-md cursor-pointer">
        <a class="block relative h-[20vmax]w-[15vmax] rounded p-2 overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center  h-full" src={img4}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Heavy mala</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Sikri</h2>
          <p class="mt-1">Rs.500</p>
        </div>
      </div>
      <div class="lg:w-[18vmax] md:w-1/2 p-6 w-full shadow-md cursor-pointer">
        <a class="block relative h-[20vmax]w-[15vmax] rounded p-2 overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center  h-full" src={img5}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Heavy mala</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Sikri</h2>
          <p class="mt-1">Rs.500</p>
        </div>
      </div>
      <div class="lg:w-[18vmax] md:w-1/2 p-6 w-full shadow-md  cursor-pointer">
        <a class="block relative h-[20vmax]w-[15vmax] rounded p-2 overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center  h-full" src={img6}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Heavy mala</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Sikri</h2>
          <p class="mt-1">Rs.500</p>
        </div>
      </div>
    </div>
  </div>
  </section>
    </>
  )
}

export default Home
