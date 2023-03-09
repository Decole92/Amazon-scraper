// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {adminDb} from 'firebaseAdmin';
import * as admin from 'firebase-admin'

type Data = {
  //input: string,
  start_eta: Date,
  collection_id: string,
}
type Error = {
  error: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>

) {
    if(req.method !== 'POST'){
    res.status(402).json({error: 'wrong method called!!!'})
    return;
    }
 try {

      const { search } = req.body;
      
      const response = await fetch(`https://api.brightdata.com/dca/trigger?collector=c_ley0in9l2lvxe8qoxa&queue_next=1`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
      search,
      })
    })
const data = await response.json();
console.log('data is>>>', data);
const { collection_id, start_eta } = data;

await adminDb.collection('searches').doc(collection_id).set({
   search,
   start_eta,
   status:'pending',
   updatedAt: start_eta,
})

 return res.status(200).json({collection_id, start_eta});
}catch(err: any){
  console.warn(err)
}

} 