import React, { useEffect, useState } from 'react'

export default function PhoneNumber(props) {

    const { data, onDataChange } = props;

    const flags = [{ code: "tr", codeNo: "+90", country: "turkey", url: process.env.PUBLIC_URL + `/flags/turkey.svg` },
    { code: "de", codeNo: "+49", country: "germany", url: process.env.PUBLIC_URL + `/flags/germany.svg` },
    { code: "gb", codeNo: "+44", country: "unitedKingdom", url: process.env.PUBLIC_URL + `/flags/unitedkingdom.svg` }]
    const [area, setArea] = useState({
        code: "tr",
        country: "turkey",
        codeNo: "+90",
        url: process.env.PUBLIC_URL + `/flags/turkey.svg`
    })

    const [phoneNumber, setPhoneNumber] = useState('');

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
       

        // Girilen değeri sadece sayılara dönüştür
        const numericValue = inputValue.replace(/\D/g, '');

        // 10 karakterlik bir telefon numarası oluştur
        const formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(3, 6)}-${numericValue.slice(6, 10)}`;
        //console.log(formattedValue.length)
        if (formattedValue.length > 2) {
            setPhoneNumber(formattedValue);
            
        } else if (formattedValue.length === 2) {
            setPhoneNumber('')
        }  
    };


    useEffect(() => {
        let fullPhoneNumber = area.codeNo+"-"+phoneNumber
        if(fullPhoneNumber.length===16){
           onDataChange(fullPhoneNumber);
        }
    }, [phoneNumber,area])
    

  


    return (
        <div className='flex items-center justify-center gap-x-2 '>
            <div className='relative group'>
                <div className='h-[44px] flex items-center justify-center  bg-gray-100 w-16 cursor-pointer rounded-md p-3 '>
                    <img src={area.url} alt="" />
                </div>
                <div className='absolute overflow-auto h-24 hidden group-hover:block transition-all h-autoflex items-center justify-center w-[76px] cursor-pointer p-3 '>
                    <ul className='flex flex-col items-center justify-center gap-y-2'>
                        {flags.map((flag, key) => {
                            return (
                                <li key={key}><img onClick={() => { setArea({ code: flag.code, country: flag.country, codeNo: flag.codeNo, url: flag.url }) }} src={flag.url} alt={flag.title} /></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <input onChange={handleInputChange} maxLength={12} type="text" value={phoneNumber}
                className='h-[44px] rounded-md px-2 outline-none border-[2px] border-solid transition-colors
     focus:border-brand-color focus:placeholder:text-xs focus:placeholder:-translate-y-2' placeholder='   Telefon numaranız' />

        </div>
    )
}
