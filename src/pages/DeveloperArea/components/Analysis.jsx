import React, {useRef, useState } from 'react'

export default function Analysis() {
    const imagesUrl = process.env.PUBLIC_URL + `/SDTG/`
    const ref = useRef()
    const [isOpen, setisOpen] = useState(false)
    const data = {
        gender: null,
        age: null,
        zx: null, // ailede saçı dökülen var mı 
        zy: null, // kaç yıldır saçınız dökülüyor
        xy: null, // erkek saçdökülme tipi
        xx: null // kadın saç dökülme tipi
    }
    // function reducer(rstate, action) {
    //     switch (action.type) {

    //         case 'SET_DATA':

    //             return {
    //                 ...rstate,
    //                 data: action.value
    //             }

    //         default:
    //             break;
    //     }


    // }

    // const [rstate, dispatch] = useReducer(reducer, {
    //     data: {}
    // })

    const deneme = (current) => {
        // 1 => Man
        // 2 => Women
        if (true) {
            let gender = 1
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
                    if(gender===1){
                        xy.classList.remove("hidden");
                    }else{
                        xx.classList.remove("hidden");
                    }

                    
                    break;
                default:
                    break;
            }
        }

        console.log(data)
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

    const modalActive = () => {
        if (isOpen) {
            return (
                <div className='fixed left-0 top-0 w-full h-screen backdrop-blur-sm flex items-center justify-center'>

                    <div onClick={() => { setisOpen(false) }} className='absolute cursor-pointer text-2xl font-bold right-8 top-8'>X</div>

                    <div>
                        <div ref={ref} className='flex flex-col gap-y-4'>
                            <ul id='age' className='flex flex-col px-4 py-6 rounded-md bg-brand-color opacity-80 border-white border-2 gap-y-2  items-center justify-center h-auto max-w-4xl w-[200px]'>
                                <strong>Yaş</strong>
                                {
                                    ages.map(age => {
                                        return <li key={age.id} onClick={() => { data.age = age.age; deneme(2) }} className='hover:bg-white w-full h-auto flex items-center justify-center cursor-pointer transition-all rounded-md active:scale-95'>{age.age}</li>
                                    })
                                }

                            </ul>
                            <div id='zx' className='hidden flex items-center justify-center flex-col bg-brand-color opacity-80 border-white border-2 rounded-md px-4 py-6 gap-y-2'>
                                <strong>Ailenizde saçı dökülen var mı ?</strong>
                                <div className='flex items-center justify-center gap-x-6 '>
                                    <button value={1} onClick={() => { data.zx = 1; deneme(3) }} className='bg-white h-auto w-24 rounded-sm hover:bg-white transition-all active:scale-95'>Evet</button>
                                    <button value={0} onClick={() => { data.zx = 1; deneme(3) }} className='bg-white h-auto w-24 rounded-sm hover:bg-white transition-all active:scale-95'>Hayır</button>
                                </div>
                            </div>
                            <ul id='zy' className='flex hidden flex-col rounded-sm items-center justify-center px-4 py-6 bg-brand-color opacity-80 border-white border-2 gap-y-2'>
                                <strong>Kaç Yıldır Saçınız Dökülüyor ? </strong>
                                {zy.map(res => {
                                    return <li key={res.id} onClick={() => { data.zy = res.zy; deneme(4) }} className='hover:bg-white w-full h-auto flex items-center justify-center cursor-pointer transition-all rounded-md active:scale-95'>{res.zy}</li>
                                })}

                            </ul>
                            <ul id='xy' className=' hidden flex-col rounded-md  items-center justify-center  px-4 py-6 bg-brand-color opacity-80 border-white border-2 gap-y-4'>
                                <strong>Saçınızın Dökülme Tipini Seçin</strong>
                                <div className='grid grid-cols-2 grid-flow-row gap-4'>
                                    <img src={imagesUrl + "erkekderece1.png"} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />
                                    <img src={imagesUrl + "erkekderece2.png"} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />
                                    <img src={imagesUrl + "erkekderece3.png"} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />
                                    <img src={imagesUrl + "erkekderece4.png"} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />
                                </div>
                            </ul>
                            <ul id='xx' className=' hidden flex flex-col rounded-md   items-center justify-center  px-4 py-6 bg-gray-200 gap-y-4'>
                                <strong>Saçınızın Dökülme Tipini Seçin</strong>
                                <div className='grid grid-cols-2 grid-flow-row gap-4'>
                                    <img src={imagesUrl + "kadinderece1.png"} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />
                                    <img src={imagesUrl + "kadinderece2.png"} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />
                                    <img src={imagesUrl + "kadinderece3.png"} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />
                                    <img src={imagesUrl + "kadinderece4.png"} className='border-[1px] h-auto w-48 hover:border-white cursor-pointer active:scale-95 ' alt="" />

                                </div>
                            </ul>
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
                    <div onClick={() => { setisOpen(true) }} className='flex flex-col items-center justify-center'>
                        <img className='h-auto w-96 bg-white rounded-xl transition-all cursor-pointer hover:border active:scale-95 ' src={`${imagesUrl}erkekderece1.png`} alt="" />
                        <p className=' text-xs md:text-base font-medium md:-translate-y-10 -translate-y-5'>Erkek</p>
                    </div>
                    <div onClick={() => { setisOpen(true) }} className='flex flex-col items-center justify-center' >
                        <img className='h-auto w-96 bg-white rounded-xl cursor-pointer hover:border active:scale-95 ' src={`${imagesUrl}kadinderece1.png`} alt="" />
                        <p className=' text-xs md:text-base font-medium md:-translate-y-10 -translate-y-5'>Kadın</p>

                    </div>
                </div>
            </div>
            {isOpen && modalActive()}

        </div>
    )
}
