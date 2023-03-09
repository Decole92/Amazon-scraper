'use client'
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { DocumentData } from 'firebase/firestore';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import Spinner from 'react-spinkit'
type Props = {
    doc: DocumentData;
}
function SidebarRow({doc}: Props) {

  const route = useRouter(); 
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  
   useEffect(() => {
    if(!pathname) return;

    setActive(pathname.includes(doc.id))
   }, [pathname])

  return (
   <li className={`flex justify-between p-4 cursor-pointer hover:bg-white hover:shadow-md rounded-lg
    ${active &&  ' bg-white shadow-md rounded-lg'}`} 
    onClick={() => route.push(`/search/${doc.id}`)}>
     <div>
     <p className='text-xs md:text-base font-bold truncate'>{doc.data().search}</p>
     {doc.data().status === 'pending' && (<p className='text-xs'>Scraping data...</p>)}
     </div>
     <span>
        {
            doc.data().status === 'pending' ? (
                <Spinner name='cube-grid' fadeIn='none' color='indigo' /> 
            ) : (
                <CheckCircleIcon className='h-6 w-6 text-green-500'/>
            )
        }
     </span>
   </li>
  )
}

export default SidebarRow