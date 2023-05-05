import React from 'react'
import { getFireBase } from '../firebase';
import { useState } from 'react';
import { collection, getFirestore, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect } from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import ListenImages from './ListenImages';


export default function ListenAnalysis() {
    const imagesUrl = process.env.PUBLIC_URL + `/SDTG/`


    const hairLossTypeData = [
        {
            type: 0,
            images: [
                { id: 1, src: imagesUrl + "man1.svg" }, { id: 2, src: imagesUrl + "man2.svg" }, { id: 3, src: imagesUrl + "man3.svg" }, { id: 4, src: imagesUrl + "man4.svg" }
            ]
        },
        {
            type: 1,
            images: [{ id: 1, src: imagesUrl + "women1.svg" }, { id: 2, src: imagesUrl + "women2.svg" }, { id: 3, src: imagesUrl + "women3.svg" }, { id: 4, src: imagesUrl + "women4.svg" }]
        }
    ]






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
                //console.log(data)
            })

            //console.log(data)
            return unsub;

        }



    }, [db])

    const getCustomData = () => {
        // const customData = {
        //     gender:"",
        //     hairLossType:""

        // }
        // if(currentCustomer.gender == 0){
        //     customData.gender = "Erkek";

        // }else{
        //     customData.gender = "Kadın";
        // }

        if (currentCustomer && currentCustomer.gender === 0) {
            const found = hairLossTypeData[0].images.find(image => image.id === currentCustomer.hairLossType).src
            return found;
        } else if (currentCustomer) {
            const found = hairLossTypeData[1].images.find(image => image.id === currentCustomer.hairLossType).src
            return found;

        }

    }


    const detailModal = () => {

        if (isOpenDetail == true) {

            return (
                <div className='fixed  left-0 top-0 w-full h-screen bg-gray-400 backdrop-blur-sm flex items-center justify-center'>
                    <div className='relative flex border-2 border-white rounded-2xl items-center justify-center w-[calc(100%-20%)] h-[calc(100%-20%)] p-2'>
                        <div className='absolute right-0 top-0 cursor-pointer p-4 text-gray-200 hover:text-gray-50 hover:scale-105' onClick={() => { setIsOpenDetail(false) }}><AiOutlineCloseCircle size={28}></AiOutlineCloseCircle></div>
                        <div className='basis-[50%] flex flex-col gap-y-4 items-center justify-center'>
                            <div>  <img className='h-[150px] w-auto' src={getCustomData()}></img></div>
                            <ul className='flex flex-col gap-y-2 bg-gray-400 py-5 px-10 rounded-2xl items-start justify-center'> 
                                <li className='bg-gray-200 py-1 px-2 w-full rounded-tr-xl rounded-bl-xl hover:scale-95 transition-transform '>Cinsiyet : {currentCustomer.gender == 0 ? "Erkek" : "Kadın"}</li>
                                <li className='bg-gray-200 py-1 px-2 w-full rounded-tr-xl rounded-bl-xl hover:scale-95 transition-transform '>İsim Soyisim : {currentCustomer.fullName}</li>
                                <li className='bg-gray-200 py-1 px-2 w-full rounded-tr-xl rounded-bl-xl hover:scale-95 transition-transform '>Telefon Numarası : {currentCustomer.phoneNumber}</li>
                                <li className='bg-gray-200 py-1 px-2 w-full rounded-tr-xl rounded-bl-xl hover:scale-95 transition-transform '>Yaş : {currentCustomer.age}</li>
                                <li className='bg-gray-200 py-1 px-2 w-full rounded-tr-xl rounded-bl-xl hover:scale-95 transition-transform '>Ailede saçı dökülen var mı  : {currentCustomer.isThereAFamilyHistoryOfHairLoss}</li>
                                <li className='bg-gray-200 py-1 px-2 w-full rounded-tr-xl rounded-bl-xl hover:scale-95 transition-transform '>Kaç yıldır saçınız dökülüyor   : {currentCustomer.howManyYearsHairLoss}</li>
                            </ul>
                        </div>
                        <div className='basis-[50%] flex flex-col gap-y-8 items-center justify-center'>
                            <header><strong>Fotoğraflar</strong></header>
                            <div>
                                <ul>
                                    <ListenImages customerId={currentCustomer.id}></ListenImages>
                                </ul>
                            </div>
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
