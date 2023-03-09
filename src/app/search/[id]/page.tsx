'use client'
import  {db} from '../../../firebase'

import { useDocument } from 'react-firebase-hooks/firestore'
import { deleteDoc, doc } from 'firebase/firestore'
import Results from '@/components/Results'
import { useRouter } from 'next/navigation'
import Spinner from 'react-spinkit'

type Props = {
    params: {
        id: string,
    }
}

function SearchPage({params: {id}}: Props) {

    const [snapshot, loading, error] = useDocument(doc(db, "searches", id));
    const router = useRouter();

    console.log("snapshot>>>>>>", snapshot?.data()?.status);

    const handleDelete = () => {
        deleteDoc(doc(db, 'searches', id));
        router.push('/');
    }

    if(loading) return(
     <h1 className='text-center p-10 animate-pulse text-xl text-indigo-600/50'>Loading Results</h1>
      );

 if(!snapshot?.exists()) return(
    <h1>this query does not exists</h1>
    );

 if(snapshot?.data()?.status === "pending")
    return (
         <div className='flex flex-col gap-y-5 py-10 items-center justify-center'>
           <p className='text-indigo-600'>Scraping results from Amazon</p>
           <Spinner style={{height:'100px', width:'100px'}} 
            name="cube-grid"
           fadeIn="none"
           color="indigo" 
           />
        </div>
    );
    
  return <div>
     <div className='grid md:flex items-center justify-center'>
        <div className='flex flex-col md:flex-row gap-x-4 p-4'>
            <h1 className='font-bold'>Search results for {""}
            <span className='text-indigo-600'>&ldquo;{snapshot.data()?.search}&ldquo;</span>
        </h1>
        <p className='text-gray-400'>{snapshot.data()?.results?.length > 0 && `${snapshot?.data()?.results?.length}`} found results</p>
        </div>
        <div className='flex flex-col mb-4 md:mb-2 '>
            <button onClick={handleDelete} className=' bg-indigo-600 text-white p-2 rounded-lg'>Delete Search</button>
        </div>
    </div>
    {
        snapshot?.data()?.results?.length > 0 && (
            <Results  results={snapshot?.data()?.results} key={snapshot?.data()?.id} />
        )
    }
</div>;

}

export default SearchPage;
