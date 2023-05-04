import React, { useEffect } from 'react'
import { useState, ChangeEvent } from 'react'
import { addFormAnalysis, getStoregeRef } from '../firebase';
import ProgressBarCustom from './ProgressBarCustom';
import { uploadBytesResumable ,ref as storageRef, getDownloadURL } from 'firebase/storage';

export default function MultipleFileUpload({formData,onClose}) {

  //console.log(formData.gender);
  const storage = getStoregeRef();
  const [fileList, setFileList] = useState();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
  }, [])


  function handleUpload() {
    if (fileList == null) return;
    const iFile = fileList[0]
    addFormAnalysis(formData).then(res => {
      //console.log(file.name)
      const metadata = {
        contentType: 'image/jpeg'
      };

      // Upload file and metadata to the object 'images/mountains.jpg'
      const sRef = storageRef(storage, `${res}/${iFile.name}`);
      const uploadTask = uploadBytesResumable(sRef, iFile, metadata);


      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
        (snapshot) => {
          //Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress)
          if(progress == 100){
            onClose()
          }
          // switch (snapshot.state) {
          //     case 'paused':
          //         console.log('Upload is paused');
          //         break;
          //     case 'running':
          //         console.log('Upload is running');
          //         break;
          // }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;

            // ...

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        // () => {
        //   // Upload completed successfully, now we can get the download URL
        //   getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //     console.log('File available at', downloadURL);
        //   });
        // }
      );


    })

  }






  return (
    <div className='flex flex-col items-center justify-center gap-y-5'>
      <input type="file" onChange={((e) => { setFileList(e.target.files) })} />

      <button className='h-10 font-medium hover:scale-95 transition-all tracking-widest text-gray-900 w-auto bg-brand-color rounded-md px-8' onClick={handleUpload}>Gönder</button>
      <ProgressBarCustom percentage={progress}></ProgressBarCustom>
    </div>
  )
}



