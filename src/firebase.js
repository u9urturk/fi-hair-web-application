import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage,ref as storageRef, uploadBytesResumable } from "firebase/storage";
import { getProgress } from "./components/MultipleFileUpload";


const firebaseConfig = {
    apiKey: "AIzaSyALDalg1BI1IQjld6Ez5ly4WJCaJ28aMCQ",
    authDomain: "fihair-web-application.firebaseapp.com",
    projectId: "fihair-web-application",
    storageBucket: "fihair-web-application.appspot.com",
    messagingSenderId: "291597816223",
    appId: "1:291597816223:web:665aa86ec2c40e170c6daa"


};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app);


export const addFormData = (customerId, file) => {
    //console.log(file.name)
    const metadata = {
        contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const sRef = storageRef(storage, `${customerId}/${file.name}`);
    const uploadTask = uploadBytesResumable(sRef, file, metadata);


    // Listen for state changes, errors, and completion of the upload.
     uploadTask.on('state_changed',
        (snapshot) => {
            //Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const  progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            getProgress(progress);
            
            // console.log('Upload is ' + progress + '% done');
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
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
            });
        }
    );


}



export const getFireBase = () => {
    return app;
}


export const addFormContact = async (data) => {
    //console.log(data)
    const newContactRef = doc(collection(db, "contact"));

    await setDoc(newContactRef, {
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        createdTime: new Date(),
        readed: false
    })

        //console.log(data)
        

}


export const addFormAnalysis = async (props) => {

   //console.log(props.iFile.name)

        const newContactRef = collection(db,"analysis");

       const docRef= await addDoc(newContactRef,{
            gender:props.formData.formData.gender,
            age:props.formData.formData.age,
            isThereAFamilyHistoryOfHairLoss:props.formData.formData.isThereAFamilyHistoryOfHairLoss,
            howManyYearsHairLoss:props.formData.formData.howManyYearsHairLoss,
            hairLossType:props.formData.formData.hairLossType,
            fullName:props.formData.formData.fullName,
            phoneNumber:props.formData.formData.phoneNumber
        })

         addFormData(docRef.id,props.iFile)

        //console.log("Eklenen id : " + docRef.id);

}