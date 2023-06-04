import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { userHendle } from "./utils";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyALDalg1BI1IQjld6Ez5ly4WJCaJ28aMCQ",
  authDomain: "fihair-web-application.firebaseapp.com",
  projectId: "fihair-web-application",
  storageBucket: "fihair-web-application.appspot.com",
  messagingSenderId: "291597816223",
  appId: "1:291597816223:web:665aa86ec2c40e170c6daa"


};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);
onAuthStateChanged(auth, user => {
  userHendle(user || false)
});




export const login = (email,password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      toast.success("Giriş Başarılı")
    })
    .catch((error) => {
      const errorCode = error.code;
      if(errorCode === "auth/invalid-email"){
        toast.error("Kullanıcı bilgileri hatalı")
      }
    })

}

export const logout = async ()=>{
   await signOut(auth);
   toast.success("Oturum Kapatıldı")
   return true
}
export const getFireBase = () => {
  return app;
}

export const getStoregeRef = () => {
  return storage;
}




export const addFormContact = async (fullName,phoneNumber) => {
 
  const newContactRef = doc(collection(db, "contact"));

  await setDoc(newContactRef, {
    fullName: fullName,
    phoneNumber: phoneNumber,
    createdTime: new Date(),
    readed: false
  })

  


}


export const addFormAnalysis = async (formData) => {

  //console.log(formData)

  const newContactRef = collection(db, "analysis");

  const docRef = await addDoc(newContactRef, {
    gender: formData.gender,
    age: formData.age,
    isThereAFamilyHistoryOfHairLoss: formData.isThereAFamilyHistoryOfHairLoss,
    howManyYearsHairLoss: formData.howManyYearsHairLoss,
    hairLossType: formData.hairLossType,
    fullName: formData.fullName,
    phoneNumber: formData.phoneNumber,
    createdTime: new Date(),
    readed: false
  })



  return docRef.id;

}