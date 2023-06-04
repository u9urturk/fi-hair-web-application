import React, { useEffect } from 'react'
import { useState, ChangeEvent } from 'react'
import { addFormAnalysis, getStoregeRef } from '../firebase';
import ProgressBarCustom from './ProgressBarCustom';
import { uploadBytesResumable ,ref as storageRef, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-toastify';

export default function MultipleFileUpload({formData,onClose}) {

  //console.log(formData.gender);
  const storage = getStoregeRef();
  const [fileList, setFileList] = useState([]);
  const [progress, setProgress] = useState(0);

  //console.log(fileList)
  function handleUpload() {
    //console.log(formData)
    if (fileList == null && formData === null) return;
    else if(fileList.length>3){
      toast.warning("En Fazla 3 Fotoğraf Ekleyebilirsiniz.")
      return;
    }
    else if(fileList==null && formData){
      addFormAnalysis(formData);
      toast.success("Bilgiler başarılı ile gönderildi. En kısa sürede dönüş yapacağız sağlıcakla kalın.")
      onClose()
      return;
    }
    addFormAnalysis(formData).then(res => {
      //console.log(file.name)
      const metadata = {
        contentType: 'image/jpeg'
      };

      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const sRef = storageRef(storage, `${res}/${file.name}`);
        const uploadTask = uploadBytesResumable(sRef, file, metadata);
  
  
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
          (snapshot) => {
            //Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress)
            if(progress == 100){
              setTimeout(() => {
                onClose()
              }, 1300);
              toast.success("Bilgiler başarılı ile gönderildi. En kısa sürede dönüş yapacağız sağlıcakla kalın.")
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
        
      }


    })

  }






  return (
    <div className='flex flex-col items-center justify-center gap-y-5'>
      <input type="file" multiple  onChange={((e) => { setFileList(e.target.files) })} />

      <button className='h-10 font-medium hover:scale-95 transition-all tracking-widest text-gray-100 w-auto bg-brand-color rounded-md px-8' onClick={handleUpload}>Gönder</button>
      <ProgressBarCustom percentage={progress}></ProgressBarCustom>
    </div>
  )
}



