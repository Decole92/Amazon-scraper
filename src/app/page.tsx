import Image from 'next/image'
import React from 'react'
import {DocumentMagnifyingGlassIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';

function Homepage() {
  return (
   
    <div className='flex flex-col items-center text-center justify-center mt-20'>
      <DocumentMagnifyingGlassIcon  className='h-64 w-64 text-indigo-600/20 items-center r' />
      <h1 className='text-3xl mt-2 text-black font-bold mb-5'>Welcome Amazon Web Scapper</h1>
      <h2>Use this Web app to scraper Amazon and store data for future references.</h2>
      <h3 className='text-indigo-600 font-semibold'><Link href='https://Portfolio.decolemills.com'>https://Portfolio.decolemills.com</Link></h3>
    </div>

  )
}

export default Homepage