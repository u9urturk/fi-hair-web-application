import React, { useEffect } from 'react'
import { useState,ChangeEvent } from 'react'
import { addFormAnalysis } from '../firebase';
import ProgressBarCustom from './ProgressBarCustom';


let test = null;

export const getProgress = (value)=>{
 
  test=value;

  console.log(test)
}


export default function MultipleFileUpload(formData) {

  //console.log(progress);

 const [fileList,setFileList] = useState();
 const [progress,setProgress] = useState(0);
   
  useEffect(() => {
  }, [])
  

    function handleUpload(){
       if(fileList == null)  return;
      const iFile = fileList[0]
     addFormAnalysis({formData,iFile})
      
    }

    
    

    

  return (
    <div className='flex flex-col items-center justify-center gap-y-5'>
        <input type="file"  onChange={((e)=>{setFileList(e.target.files)})} />
       
        <button  onClick={handleUpload}>Upload</button>
        <ProgressBarCustom  percentage={progress}></ProgressBarCustom>
    </div>
  )
}



