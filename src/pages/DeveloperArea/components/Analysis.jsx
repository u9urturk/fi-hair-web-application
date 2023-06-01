import React, { useRef, useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import {toast } from 'react-toastify'
import MultipleFileUpload from '../../../components/MultipleFileUpload'
import {AiOutlineCloseCircle} from 'react-icons/ai'


export default function Analysis() {
    const imagesUrl = process.env.PUBLIC_URL + `/SDTG/`
    const ref = useRef()
    const [isOpen, setisOpen] = useState(false)
    const [formData,setFormData] = useState({
        gender:"",
        age:null,
        isThereAFamilyHistoryOfHairLoss:"",
        howManyYearsHairLoss:null,
        hairLossType:null,
        fullName:"",
        phoneNumber:""

    })
    const [selected, setSelected] = useState('TR');

    const notifyError = () => toast.error('Hata! , Gönderilemedi', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const notifySuccess = () => toast.success('Başarıyla Gönderildi.', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

   

    const handleSubmit = (res)=>{
        if(res){
            //console.log(formData);
            notifySuccess()
            setTimeout(() => {
                setisOpen(false);
                setFormData({gender:null,age:null,isThereAFamilyHistoryOfHairLoss:null,howManyYearsHairLoss:null,hairLossType:null, fullName:"",phoneNumber:""})

            },1300);
        }else{
            notifyError()
        }
    }





    

  

    const deneme = (current) => {
        // 0 => Man
        // 1 => Women
        if (true) {

            switch (current) {
                case 1:
                    //age

                    let age = ref.current.querySelector("#age")
                    age.classList.remove('hidden')
                    console.log(age)

                    break;
                case 2:
                    let age1 = ref.current.querySelector("#age")
                    age1.classList.add("hidden");
                    let zx = ref.current.querySelector("#zx")
                    zx.classList.remove("hidden");


                    break;

                case 3:
                    let zx1 = ref.current.querySelector("#zx")
                    zx1.classList.add("hidden");
                    let zy = ref.current.querySelector("#zy")
                    zy.classList.remove("hidden");
                    break;
                case 4:
                    let zy1 = ref.current.querySelector("#zy")
                    zy1.classList.add("hidden");
                    let type = ref.current.querySelector("#type")
                    type.classList.remove("hidden");
                    break;

                case 5:
                    let type1 = ref.current.querySelector("#type")
                    type1.classList.add("hidden");

                    let name = ref.current.querySelector("#name")
                    name.classList.remove("hidden")


                    break;
                default:
                    break;
            }
        }

    }


    const ages = [
        {
            id: 1,
            age: "18-25"

        },
        {
            id: 2,
            age: "26-35"

        },
        {
            id: 3,
            age: "36-45"

        },
        {
            id: 4,
            age: "46-65"

        },
        {
            id: 5,
            age: "65+"
        }

    ]

    const howManyYearsHairLoss = [
        { id: 1, zy: "1" }, { id: 2, zy: "2" }, { id: 3, zy: "3" }, { id: 4, zy: "4" }, { id: 5, zy: "5" }, { id: 6, zy: "6" }, { id: 7, zy: "7" }, { id: 8, zy: "8" }, { id: 9, zy: "9" }, { id: 10, zy: "10+" }
    ]

    const hairLossType = [
        {
            type:0,
            images:[
                {id: 1, src: imagesUrl + "man1.svg" }, { id: 2, src: imagesUrl + "man2.svg"}, { id: 3, src: imagesUrl + "man3.svg" }, { id: 4, src: imagesUrl + "man4.svg"}
            ]
        },
        {
            type:1,
            images:[ { id: 1, src: imagesUrl + "women1.svg"  }, { id: 2, src: imagesUrl + "women2.svg" }, { id: 3, src: imagesUrl + "women3.svg" }, { id: 4, src: imagesUrl + "women4.svg" }]
        }
    ]
   
    const phones = {
        US: '+1',
        DE: '+50',
        TR: '+90',
        IT: '+7',
        IN: '+15'
    }

    const modalActive = () => {
        if (isOpen) {
            return (
                <div className='fixed left-0 top-0 w-full h-screen backdrop-blur-sm flex items-center justify-center'>
                    <div>
                        <div ref={ref} className='flex flex-col gap-y-4'>
                            <ul id='age' className='flex relative flex-col px-4 py-6 md:py-16 bg-brand-color bg-opacity-30 rounded-xl  border-white border-2 gap-y-2 md:gap-y-3  items-center justify-center h-auto max-w-4xl w-[200px] md:w-[400px]'>
                            <div onClick={() => { setisOpen(false) }} className='absolute cursor-pointer text-2xl text-gray-100 font-bold top-1 right-1'><AiOutlineCloseCircle size={32}></AiOutlineCloseCircle></div>
                                <strong className='font-serif '>Yaş</strong>
                                {
                                    ages.map(age => {
                                        return <li key={age.id} onClick={() => { setFormData({...formData,age:age.age}); deneme(2) }} 
                                        className='hover:bg-white md:bg-transparent bg-gray-100  w-full border-[2px] py-1 h-auto flex items-center justify-center cursor-pointer 
                                        transition-all rounded-md active:scale-95'>{age.age}</li>
                                    })
                                }

                            </ul>
                            <div id='zx' className='hidden flex relative items-center justify-center flex-col  bg-brand-color bg-opacity-30  rounded-xl  border-white border-2 px-4 py-6 gap-y-2'>
                            <div onClick={() => { setisOpen(false) }} className='absolute cursor-pointer text-2xl font-bold top-1 text-gray-100  right-1'><AiOutlineCloseCircle size={22}></AiOutlineCloseCircle></div>
                                <strong>Ailenizde saçı dökülen var mı ?</strong>
                                <div className='flex items-center justify-center gap-x-6 '>
                                    <button onClick={() => { setFormData({...formData,isThereAFamilyHistoryOfHairLoss:"Evet"}); deneme(3) }} className='bg-white h-auto w-24 rounded-md hover:bg-white transition-all active:scale-95'>Evet</button>
                                    <button onClick={() => { setFormData({...formData,isThereAFamilyHistoryOfHairLoss:"Hayır"}); deneme(3) }} className='bg-white h-auto w-24 rounded-md hover:bg-white transition-all active:scale-95'>Hayır</button>
                                </div>
                            </div>
                            <ul id='zy' className='flex hidden relative flex-col bg-brand-color bg-opacity-30 p-8 rounded-xl  items-center justify-center px-4 py-6 border-white border-2 gap-y-2'>
                            <div onClick={() => { setisOpen(false) }} className='absolute cursor-pointer text-2xl font-bold top-1 text-gray-100  right-1'><AiOutlineCloseCircle size={24}></AiOutlineCloseCircle></div>
                                <strong className='font-serif pb-4'>Kaç Yıldır Saçınız Dökülüyor ? </strong>
                                {howManyYearsHairLoss.map(res => {
                                    return <li key={res.id} onClick={() => { setFormData({...formData,howManyYearsHairLoss:res.zy}); deneme(4) }}
                                     className='hover:bg-white bg-gray-100 md:bg-transparent border-[2px] w-full h-auto flex items-center justify-center cursor-pointer 
                                     transition-all rounded-md active:scale-95'>{res.zy}</li>
                                })}

                            </ul>
                            <ul id='type' className=' hidden flex-col relative  bg-brand-color bg-opacity-30  rounded-xl   items-center justify-center 
                             px-4 py-6  border-white border-2 '>
                                 <div onClick={() => { setisOpen(false) }} className='absolute cursor-pointer text-2xl font-bold top-1 text-gray-100  right-1'><AiOutlineCloseCircle size={32}></AiOutlineCloseCircle></div>
                                <div className='w-full h-auto flex items-center justify-center'><strong>Saçınızın Dökülme Tipini Seçin</strong></div>
                                <div className='grid grid-cols-2 grid-flow-row gap-4 pt-3'>
                                    {
                                       formData.gender === 0 &&
                                       hairLossType[0].images.map(image => {
                                            return <img key={image.id} onClick={() => { setFormData({...formData,hairLossType:image.id}); deneme(5) }} src={image.src} 
                                            className='border-[1px] md:border-2 h-auto w-48 md:w-96 hover:border-white cursor-pointer active:scale-95 ' alt="" />
                                        }) ||
                                        hairLossType[1].images.map(image => {
                                            return <img key={image.id} onClick={() => { setFormData({...formData,hairLossType:image.id}); deneme(5) }} src={image.src} 
                                            className='border-[1px] md:border-2 h-auto w-48 md:w-96 hover:border-white cursor-pointer active:scale-95 ' alt="" />
                                        })
                                    }

                                </div>
                            </ul>
                           
                            <div id='name'className=' hidden relative flex flex-col items-center justify-center gap-y-8 bg-brand-color bg-opacity-30 p-8 rounded-xl '>
                            <div onClick={() => { setisOpen(false) }} className='absolute cursor-pointer text-2xl font-bold top-1 text-gray-100  right-1'><AiOutlineCloseCircle size={32}></AiOutlineCloseCircle></div>
                                <strong>Saç Analizi İçin Formu Doldurun</strong>
                                <div className='flex  flex-col items-center  justify-center w-full h-auto   gap-y-4'>
                                    <input className='w-full rounded-md h-[44px] px-2 outline-none focus:placeholder:text-xs focus:placeholder:-translate-y-2' onChange={(e)=>{setFormData({...formData,fullName:e.target.value})}} value={formData.fullName} type="text" placeholder='   Adınız Soyadınız' />
                                    <div className='flex items-center justify-center gap-x-2 '>
                                        <div className='pt-2'> <ReactFlagsSelect
                                            countries={Object.keys(phones)}
                                            customLabels={phones}
                                            onSelect={code => setSelected(code)}
                                            selected={selected}
                                            className="flag-select"
                                        />

                                        </div>
                                        <input type="text" className='h-[44px] rounded-md px-2 outline-none focus:placeholder:text-xs focus:placeholder:-translate-y-2' onChange={(e)=>{setFormData({...formData,phoneNumber:e.target.value})}} value={formData.phoneNumber} placeholder='   Telefon numaranız' />
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-y-3'>
                                    <strong>Saç Analizi İçin Kendi Fotoğraflarınızı Yüklemek İster misiniz ?</strong>
                                    <div >
                                        <MultipleFileUpload formData={formData} onClose={()=>{handleSubmit(true)}} ></MultipleFileUpload>
                                    </div>
                                </div>
                                {/* <div  className='translate-x-40 translate-y-4 active:scale-95 hover:scale-105 transition-all'><button onClick={()=>{handleSubmit()}} className='h-10 font-medium tracking-widest text-gray-900 w-auto bg-brand-color rounded-md px-8'>Gönder</button></div> */}
                               
                                    
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
    }


    return (
        <div className='w-full h-auto pb-20  bg-gray-100 flex flex-col pt-1 pl-8 items-center justify-start gap-y-10 '>
            <h1 className='font-semibold font-serif text-2xl'>Saç Analiz Formu </h1>
            <div className='flex items-center justify-center flex-col gap-y-2 '>
                <div className=' flex flex-col items-center justify-center gap-y-1 w-20 md:w-28' >
                    <p className='font-serif font-semibold '>Cinsiyet</p>
                    <div className='border-t-[1px]  border-brand-color w-full'></div>
                </div>
                <div className='flex items-center  pt-4 transition-all justify-center  gap-x-8 mr-8 md:gap-x-80'>
                    <div onClick={() => { setFormData({...formData,gender:0}); setisOpen(true); }}
                     className='relative drop-shadow-2xl flex flex-col items-center justify-center'>
                        <img className='h-auto w-96 bg-white rounded-xl transition-all cursor-pointer  border-2 border-slate-200 md:hover:border-slate-300 xl:hover:scale-105  md:active:scale-90 ' src={`${imagesUrl}man1.svg`} alt="" />
                        <p className=' absolute text-xs md:text-base font-serif md:font-semibold right-4 top-4'>Erkek</p>
                    </div>
                    <div onClick={() => { setFormData({...formData,gender:1}); setisOpen(true); }} 
                    className='flex flex-col drop-shadow-2xl relative items-center justify-center' >
                        <img className='h-auto w-96 bg-white rounded-xl cursor-pointer border-2 border-slate-200 md:hover:border-slate-300 xl:hover:scale-105 transition-all md:active:scale-90 ' src={`${imagesUrl}women1.svg`} alt="" />
                        <p className='absolute text-xs md:text-base font-serif md:font-semibold  right-4 top-4'>Kadın</p>

                    </div>
                </div>
            </div>
            {isOpen && modalActive()}

          

        </div>
    )
}
