import React from 'react'
import { useState,ChangeEvent } from 'react'
import { addFormAnalysis } from '../firebase';

export default function MultipleFileUpload(formData) {

    const [fileList,setFileList] = useState();


    function handleUpload(){
       if(fileList == null)  return;
      const iFile = fileList[0]
     addFormAnalysis({formData,iFile});
    }

  return (
    <div>
        <input type="file"  onChange={((e)=>{setFileList(e.target.files)})} />
       
        <button onClick={handleUpload}>Upload</button>
    </div>
  )
}
