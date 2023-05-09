import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";
import {  getStorage } from "firebase/storage";


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



export const getFireBase = () => {
    return app;
}

export const getStoregeRef = () => {
    return storage;
}


export const addFormContact = async (data) => {
    //console.log(data)
    // const newContactRef = doc(collection(db, "contact"));

    // await setDoc(newContactRef, {
    //     fullName: data.fullName,
    //     phoneNumber: data.phoneNumber,
    //     createdTime: new Date(),
    //     readed: false
    // })

        //console.log(data)
        

}


export const addFormAnalysis = async (formData) => {

//    console.log(formData)

    //     const newContactRef = collection(db,"analysis");

    //    const docRef= await addDoc(newContactRef,{
    //         gender:formData.gender,
    //         age:formData.age,
    //         isThereAFamilyHistoryOfHairLoss:formData.isThereAFamilyHistoryOfHairLoss,
    //         howManyYearsHairLoss:formData.howManyYearsHairLoss,
    //         hairLossType:formData.hairLossType,
    //         fullName:formData.fullName,
    //         phoneNumber:formData.phoneNumber,
    //         createdTime:new Date(),
    //         readed:false
    //     })

         

    //     return docRef.id;

}