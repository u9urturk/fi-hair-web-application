import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyALDalg1BI1IQjld6Ez5ly4WJCaJ28aMCQ",
    authDomain: "fihair-web-application.firebaseapp.com",
    projectId: "fihair-web-application",
    storageBucket: "fihair-web-application.appspot.com",
    messagingSenderId: "291597816223",
    appId: "1:291597816223:web:665aa86ec2c40e170c6daa",
    databaseURL: "https://fihair-web-application-default-rtdb.europe-west1.firebasedatabase.app/"

};

const app = initializeApp(firebaseConfig);
const realtimeDb = getDatabase(app);





export const addFormContact = async (data) => {

    console.log(data)
    const contactListRef = ref(realtimeDb, 'contacts');
    const newContactRef = push(contactListRef);
    await set(newContactRef,{
        fullName: data.fullName,
        phoneNumber: data.phoneNumber
    });

}


export const addFormAnalysis = async (data) => {

    console.log(data)
    const analysisListRef = ref(realtimeDb, 'analysis');
    const newAnalysisRef = push(analysisListRef);
    await set(newAnalysisRef,{
        data
    });

}