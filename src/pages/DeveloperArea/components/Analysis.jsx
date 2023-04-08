import React, { useReducer, useRef, useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import { ToastContainer, toast } from 'react-toastify'
function reducer(rstate, action) {
    switch (action.type) {


        case 'SET_AGE':

            return {
                ...rstate,
                age: action.value
            }
        case 'SET_ZX':

            return {
                ...rstate,
                zx: action.value
            }
        case 'SET_ZY':

            return {
                ...rstate,
                zy: action.value
            }
        case 'SET_XY':

            return {
                ...rstate,
                xy: action.value
            }
        case 'SET_XX':

            return {
                ...rstate,
                xx: action.value
            }


        default:
            break;
    }


}
export default function Analysis() {
    const [rstate, dispatch] = useReducer(reducer, {
        age: null,
        zx: null, // ailede saçı dökülen var mı 
        zy: null, // kaç yıldır saçınız dökülüyor
        xy: null, // erkek saçdökülme tipi
        xx: null // kadın saç dökülme tipi
    
    })
    const imagesUrl = process.env.PUBLIC_URL + `/SDTG/`
    const ref = useRef()
    const [isOpen, setisOpen] = useState(false)
    const [gender, setGender] = useState()
    const [data,setData] = useState()
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

    const handleSubmit = ()=>{
        if(true){
            let xdata = {
                gender:gender,
                age:rstate.age,
                zx:rstate.zx,
                zy:rstate.zy,
                xy:rstate.xy,
                xx:rstate.xx
            }
            console.log(xdata)
            notifySuccess()
            setTimeout(() => {
                setisOpen(false);
            },300);
        }else{
            notifyError()
        }
    }



    

  

    const deneme = (current) => {
        // 1 => Man
        // 2 => Women
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
                    let xy = ref.current.querySelector("#xy")
                    let xx = ref.current.querySelector("#xx")
                    console.log(gender)
                    if (gender === 1) {
                        xy.classList.remove("hidden");
                    } else {
                        xx.classList.remove("hidden");
                    }

                    break;

                case 5:
                    let xy1 = ref.current.querySelector("#xy")
                    let xx1 = ref.current.querySelector("#xx")
                    if (gender === 1) {
                        xy1.classList.add("hidden");
                    } else {
                        xx1.classList.add("hidden");
                    }

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

    const zy = [
        { id: 1, zy: "1" }, { id: 2, zy: "2" }, { id: 3, zy: "3" }, { id: 4, zy: "4" }, { id: 5, zy: "5" }, { id: 6, zy: "6" }, { id: 7, zy: "7" }, { id: 8, zy: "8" }, { id: 9, zy: "9" }, { id: 10, zy: "10+" }
    ]

    const xyImages = [
        { id: 1, src: imagesUrl + "erkekderece1.png" }, { id: 2, src: imagesUrl + "erkekderece2.png" }, { id: 3, src: imagesUrl + "erkekderece3.png" }, { id: 4, src: imagesUrl + "erkekderece4.png" }
    ]
    const xxImages = [
        { id: 1, src: imagesUrl + "kadinderece1.png" }, { id: 2, src: imagesUrl + "kadinderece2.png" }, { id: 3, src: imagesUrl + "kadinderece3.png" }, { id: 4, src: imagesUrl + "kadinderece4.png" }
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

                    <div onClick={() => { setisOpen(false) }} className='absolute cursor-pointer text-2xl font-bold right-8 top-8'>X</div>

                    <div>
                        <div ref={ref} className='flex flex-col gap-y-4'>
                            <ul id='age' className='flex flex-col px-4 py-6 bg-brand-color bg-opacity-30 rounded-xl  border-white border-2 gap-y-2  items-center justify-center h-auto max-w-4xl w-[200px]'>
                                <strong>Yaş</strong>
                                {
                                    ages.map(age => {
                                        return <li key={age.id} onClick={() => { dispatch({ tpye: "SET_AGE", value:age.age}); deneme(2) }} className='hover:bg-white w-full border-[2px] border-spacing-1 h-auto flex items-center justify-center cursor-pointer transition-all rounded-md active:scale-95'>{age.age}</li>
                                    })
                                }

                            </ul>
                            <div id='zx' className='hidden flex items-center justify-center flex-col  bg-brand-color bg-opacity-30  rounded-xl  border-white border-2 px-4 py-6 gap-y-2'>
                                <strong>Ailenizde saçı dökülen var mı ?</strong>
                                <div className='flex items-center justify-center gap-x-6 '>
                                    <button onClick={() => { dispatch({ type: "SET_ZX", value: 1 }); deneme(3) }} className='bg-white h-auto w-24 rounded-md hover:bg-white transition-all active:scale-95'>Evet</button>
                                    <button onClick={() => { dispatch({ type: "SET_ZX", value: 2 }); deneme(3) }} className='bg-white h-auto w-24 rounded-md hover:bg-white transition-all active:scale-95'>Hayır</button>
                                </div>
                            </div>
                            <ul id='zy' className='flex hidden flex-col bg-brand-color bg-opacity-30 p-8 rounded-xl  items-center justify-center px-4 py-6 border-white border-2 gap-y-2'>
                                <strong>Kaç Yıldır Saçınız Dökülüyor ? </strong>
                                {zy.map(res => {
                                    return <li key={res.id} onClick={() => { dispatch({ type: "SET_ZY", value: res.zy }); deneme(4) }} className='hover:bg-white w-full h-auto flex items-center justify-center cursor-pointer transition-all rounded-md active:scale-95'>{res.zy}</li>
                                })}

                            </ul>
                            <ul id='xy' className=' hidden flex-col  bg-brand-color bg-opacity-30  rounded-xl   items-center justify-center  px-4 py-6  border-white border-2 '>
                                <strong>Saçınızın Dökülme Tipini Seçin</strong>
                                <div className='grid grid-cols-2 grid-flow-row gap-4 pt-3'>
                                    {
                                        xyImages.map(image => {
                                            return <img key={image.id} onClick={() => { dispatch({ type: "SET_XY", value: image.id }); deneme(5) }} src={image.src} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />
                                        })
                                    }

                                </div>
                            </ul>
                            <ul id='xx' className=' hidden flex flex-col   items-center justify-center bg-opacity-30  rounded-xl  px-4 py-6 bg-brand-color gap-y-4'>
                                <strong>Saçınızın Dökülme Tipini Seçin</strong>
                                <div className='grid grid-cols-2 grid-flow-row gap-4 pt-3'>
                                    {
                                        xxImages.map(image => {
                                            return <img key={image.id} onClick={() => { dispatch({ type: "SET_XX", value: image.id }); deneme(5) }} src={image.src} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />
                                        })
                                    }

                                </div>
                            </ul>
                            <div id='name'className=' hidden flex flex-col items-center justify-center gap-y-8 bg-brand-color bg-opacity-30 p-8 rounded-xl '>
                                <strong>Saç Analizi İçin Formu Doldurun</strong>
                                <div className='flex  flex-col items-center  justify-center w-full h-auto   gap-y-4'>
                                    <input className='w-full rounded-md h-[44px] px-2 outline-none focus:placeholder:text-xs focus:placeholder:-translate-y-2' type="text" placeholder='   Adınız Soyadınız' />
                                    <div className='flex items-center justify-center gap-x-2 '>
                                        <div className='pt-2'> <ReactFlagsSelect
                                            countries={Object.keys(phones)}
                                            customLabels={phones}
                                            onSelect={code => setSelected(code)}
                                            selected={selected}
                                            className="flag-select"
                                        />

                                        </div>
                                        <input type="text" className='h-[44px] rounded-md px-2 outline-none focus:placeholder:text-xs focus:placeholder:-translate-y-2' placeholder='   Telefon numaranız' />
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-y-3'>
                                    <strong>Saç Analizi İçin Kendi Fotoğraflarınızı Yüklemek İster misiniz ?</strong>
                                    <div >
                                        <input type="file" name="teste" id="" />
                                    </div>
                                </div>
                                <div  className='translate-x-40 translate-y-4 active:scale-95 hover:scale-105 transition-all'><button onClick={()=>{handleSubmit()}} className='h-10 font-medium tracking-widest text-gray-900 w-auto bg-brand-color rounded-md px-8'>Gönder</button></div>
                               
                                    
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
    }


    return (
        <div className='w-full h-screen bg-gray-100 flex flex-col pt-1 pl-8 justify-start gap-y-10 '>
            <h1 className='font-bold text-2xl'>Saç Analiz Formu : </h1>
            <div className='flex flex-col gap-y-2 '>
                <div className=' flex flex-col gap-y-2 p-2 w-20' >
                    <p className='font-semibold '>Cinsiyet</p>
                    <div className='border-t-[1px] border-brand-color w-full'></div>
                </div>
                <div className='flex items-center pt-4 transition-all justify-center gap-x-24'>
                    <div onClick={() => { setGender(1); setisOpen(true); }} className='flex flex-col items-center justify-center'>
                        <img className='h-auto w-96 bg-white rounded-xl transition-all cursor-pointer hover:border active:scale-90 ' src={`${imagesUrl}erkekderece1.png`} alt="" />
                        <p className=' text-xs md:text-base font-medium md:-translate-y-10 -translate-y-5'>Erkek</p>
                    </div>
                    <div onClick={() => { setGender(0); setisOpen(true); }} className='flex flex-col items-center justify-center' >
                        <img className='h-auto w-96 bg-white rounded-xl cursor-pointer hover:border active:scale-90 ' src={`${imagesUrl}kadinderece1.png`} alt="" />
                        <p className=' text-xs md:text-base font-medium md:-translate-y-10 -translate-y-5'>Kadın</p>

                    </div>
                </div>
            </div>
            {isOpen && modalActive()}

            <ToastContainer
                                            position="top-left"
                                            autoClose={3000}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick
                                            rtl={false}
                                            pauseOnFocusLoss
                                            draggable
                                            pauseOnHover
                                            theme="colored"></ToastContainer>

        </div>
    )
}
