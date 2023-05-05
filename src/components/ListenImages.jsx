import React from 'react'
import { useState } from 'react'
import { getStoregeRef } from '../firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai'


export default function ListenImages({ customerId }) {
    const storage = getStoregeRef();
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState();
    const [isImageModal, setIsImageModal] = useState(false);


    useEffect(() => {
        const listRef = ref(storage, customerId);
        listAll(listRef)
            .then((res) => {

                res.items.forEach((itemRef) => {
                    getDownloadURL(ref(storage, itemRef.fullPath))
                        .then((url) => {
                            setImages((prev) => [...prev, url])
                        })
                });
            }).catch((error) => {
                switch (error.code) {
                    case 'storage/object-not-found':
                        // File doesn't exist
                        break;
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect the server response
                        break;
                }
            });
    }, [customerId])


    const openImageModal = () => {
        if (isImageModal === true) {
            return (
                <div className='fixed  left-0 top-0 w-full h-screen backdrop-blur-sm'>
                    <div className='relative flex items-center justify-center h-full w-full'>
                        <div className='absolute right-10 cursor-pointer opacity-50 hover:opacity-100 hover:scale-95 top-10 text-white' 
                        onClick={() => { setIsImageModal(false) }}><AiOutlineCloseCircle size={30}></AiOutlineCloseCircle></div>
                        <div className=''>
                            <img  className='max-w-[100%] h-auto w-[760px] ' src={currentImage} alt="" />
                        </div>
                    </div>
                </div>
            )
        }
    }


    return (
        <>
            <div className='grid grid-cols-2 gap-4 '>
                {
                    images && images.map((image, key) => {
                        return (
                            <div key={key} style={{ backgroundImage: `url(${image})` }}
                                className='rounded-xl cursor-pointer transition-all  bg-cover bg-no-repeat w-[200px] hover:scale-95 opacity-50 
                        hover:opacity-100 h-[150px] border-2 border-gray-200 '
                                onClick={() => { setIsImageModal(true); setCurrentImage(image) }}

                            >


                            </div>
                        )
                    })
                }
            </div>
            {
                openImageModal()
            }
        </>
    )
}
