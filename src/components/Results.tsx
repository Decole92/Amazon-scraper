import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  results: Product[]
}
function Result({results}: Props) {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full'>
      {
        results.map((result) => (
       <Link href={result.url} key={result.title}
       className='flex flex-col space-x-4 w-full bg-white rounded-lg shadow-lg p-5'>
       <img width='100' height='100' alt={result.title} srcSet={result.imageset}  className='object-contain w-full h-40 py-5'/>
       <div>
       <p className='font-bold '>{result.title}</p>
        <p className='text-sm text-gray-500 '>{result.rating} (<span className='text-indigo-500/60'>{result.reviews} </span>reviews)</p>
       
        <div>
          <p className='font-bold text-indigo-500 pt-2 text-xl mt-auto'>{result.price > 0 ? `$${result.price}` : 'N/A'}</p>
        {
        result.previous_price > 0 && (
        <p className='font-bold text-indigo-500/50 line-through'>
          ${result.previous_price}
        </p>)
       }
        </div>  

       <div className='flex flex-wrap gap-2 jusitfy-end mt-2'>
        {
        result.features.map((feature)=> (
          feature && <p key={feature!} className='text-xs bg-indigo-500 px-2 py-2 text-white rounded-md'>{feature}</p>
          ))
        }
        </div>
      </div>
          </Link>
        ))
      }
      </div>
  )
}

export default Result