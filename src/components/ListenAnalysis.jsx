import React from 'react'
import { getFireBase } from '../firebase';
import { useState } from 'react';
import { collection, getFirestore, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect } from 'react';

export default function ListenAnalysis() {
    const imagesUrl = process.env.PUBLIC_URL + `/SDTG/`


    const hairLossType = [
        {
            type:0,
            images:[
                {id: 1, src: imagesUrl + "man1.svg" }, { id: 2, src: imagesUrl + "man2.svg"}, { id: 3, src: imagesUrl + "man3.svg" }, { id: 4, src: imagesUrl + "man4.svg"}
            ]
        },
        {
            type:1,
            images:[ { id: 1, src: imagesUrl + "women1.svg"  }, { id: 2, src: imagesUrl + "women2.svg" }, { id: 3, src: imagesUrl + "women3.svg" }, { id: 4, src: imagesUrl + "women4.svg" }]
        }
    ]

    const getCustomData = ()=>{
        // const customData = {
        //     gender:"",
        //     hairLossType:""
            
        // }
        // if(currentCustomer.gender == 0){
        //     customData.gender = "Erkek";

        // }else{
        //     customData.gender = "Kadın";
        // }

        if(currentCustomer.gender == 0){
            console.log(hairLossType[0].images.find(()=>{}))
        }
        
    }




    const db = getFirestore(getFireBase());

    const [data, setData] = useState([]);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [currentCustomer, setCurrentCustomer] = useState();
    useEffect(() => {
        if (db) {
            const ref = collection(db, "analysis")
            const q = query(ref, orderBy("createdTime", "desc"));
            const unsub = onSnapshot(q, (querySnapshot) => {
                //console.log(querySnapshot.docs)
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }))

                setData(data);
            })

            //console.log(data)
            return unsub;

        }



    }, [db])


    const detailModal = () => {


        if (isOpenDetail == true) {

            return (
                <div className='fixed  left-0 top-0 w-full h-screen bg-gray-400 backdrop-blur-sm flex items-center justify-center'>
                    <div className='relative flex items-center justify-center w-[calc(100%-20%)] h-[calc(100%-20%)] p-2'>
                        <div className='absolute right-0 top-0 cursor-pointer' onClick={() => { setIsOpenDetail(false) }}>X</div>
                        <div className='basis-[50%] flex items-center justify-center'>
                            <ul>
                                <li>Cinsiyet : {currentCustomer.gender}</li>
                                <li>İsim Soyisim : {currentCustomer.fullName}</li>
                                <li>Telefon Numarası : {currentCustomer.phoneNumber}</li>
                                <li>Yaş : {currentCustomer.age}</li>
                                <li>Ailede saçı dökülen var mı ? : {currentCustomer.isThereAFamilyHistoryOfHairLoss}</li>
                                <li>Kaç yıldır saçınız dökülüyor ?  : {currentCustomer.howManyYearsHairLoss}</li>
                                <li>Saç Dökülme tipi : {currentCustomer.hairLossType}</li>
                            </ul>
                        </div>
                        <div className='basis-[50%] flex items-center justify-center'>
                            <header><strong>Fotoğraflar</strong></header>
                        </div>

                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <ul className='w-full h-[460px]'>

                {

                    data && data.map((res, key) => {
                        return <li key={key} onClick={() => { setIsOpenDetail(true); setCurrentCustomer(res) }} className='border-2 opacity-70 hover:opacity-100 hover:scale-95 cursor-pointer border-gray-100 transition-all mt-2  border-opacity-40 rounded-xl p-4'>
                            <strong>{res.fullName}</strong>
                            <p>Telefon Numarası : {res.phoneNumber}</p>
                        </li>
                    })


                }
            </ul>
            {
                detailModal()
            }
        </>
    )
}
