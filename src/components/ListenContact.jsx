import React from 'react'
import { getFireBase } from '../firebase.js'
import { useEffect } from 'react';
import { useState } from 'react';
import { collection, doc, getFirestore, limit, onSnapshot, orderBy } from "firebase/firestore";
import { query } from 'firebase/database';


export default function ListenContact() {

    const db = getFirestore(getFireBase());

    const[data , setData] = useState([]);
    useEffect(() => {
      if(db){
        const ref = collection(db,"contact")
        const q = query(ref,orderBy("createdTime","desc"));
        const unsub =onSnapshot(q,(querySnapshot) => {
            console.log(querySnapshot.docs)
            const data = querySnapshot.docs.map(doc => ({
                ... doc.data(),
                id:doc.id,
            }))

            setData(data);
        })

        //console.log(data)
        return unsub;

      }

    
      
    }, [db])
    
    return (
        <ul className='w-full h-[460px]'>

            {
               data&& data.map((res,key) => {
                    return <li key={key} className='border-2 opacity-70 hover:opacity-100 hover:scale-95 cursor-pointer border-gray-100 transition-all mt-2  border-opacity-40 rounded-xl p-4'>
                        <strong>{res.fullName}</strong>
                        <p>Telefon Numarası : {res.phoneNumber}</p>
                    </li>
                })
            }
        </ul>
    )
}
