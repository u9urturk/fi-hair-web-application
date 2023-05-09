import React from 'react'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

export default function Welcome() {
    return (
        <div className='flex md:flex-row py-10  flex-col items-center justify-center text-center md:text-left w-full h-auto gap-x-8 bg-gradient-to-r md:py-10 from-brand-color to-gray-100 text-gray-800 font-semibold tracking-wider '>
            <div className='flex flex-col items-start justify-start gap-y-4 w-1/2'>
                <div className=' flex items-center justify-center gap-x-3'>
                    <div className='border-[1px] border-white  h-0 w-8'></div>
                    <div className='text-white font-serif font-normal'>
                        HOŞ GELDİNİZ
                    </div>
                    <div className='border-[1px] border-white h-0 w-8'></div>
                </div>
                <div className='text-xl md:text-2xl font-serif font-light'>
                    Fi Hair, 20 Yıllık Deneyimiyle Yaşamlarınıza Özgüven, Kalite, Mutluluk ve SANAT Katmayı Amaçlamış Bir Saç Ekim Kliniğidir.
                </div>
                <div className='text-xs tracking-normal font-serif font-normal'>
                    Alanında uzman doktorlar, tecrübeli tıbbi ve idari personellerden oluşan ekibimizle tüm tedavi süreçlerinde yanınızda oluyor, sizin için otel rezervasyonları ve transfer süreçlerini ücretsiz olarak planlıyoruz.
                </div>
            </div>
            <div className='flex flex-col items-center md:items-start justify-center gap-y-8 py-8'>
                <div>
                    Sizin İçin Her Şeyi Düşündük
                </div>
                <ul className='flex flex-col  md:flex-row items-center justify-center font-normal transition-all gap-y-2  md:gap-x-8'>
                    <div className='gap-y-2 flex flex-col items-start'>
                        <li className='flex items-center justify-center gap-x-2 hover:animate-bounce cursor-pointer'><BsFillArrowDownCircleFill className='text-brand-color '></BsFillArrowDownCircleFill>Ücretsiz Saç Analizi</li>
                        <li className='flex items-center justify-center gap-x-2 hover:animate-bounce cursor-pointer'><BsFillArrowDownCircleFill className='text-brand-color '></BsFillArrowDownCircleFill>Saç Ekim Operasyonu</li>
                        <li className='flex items-center justify-center gap-x-2 hover:animate-bounce cursor-pointer'><BsFillArrowDownCircleFill className='text-brand-color ' ></BsFillArrowDownCircleFill>Süreç Boyunca İletişim</li>
                    </div>
                    <div className='gap-y-2 flex flex-col items-start mr-3 '>
                        <li className='flex items-center justify-center gap-x-2 hover:animate-bounce cursor-pointer'><BsFillArrowDownCircleFill className='text-brand-color '></BsFillArrowDownCircleFill>Maksimum Greft</li>
                        <li className='flex items-center justify-center gap-x-2 hover:animate-bounce cursor-pointer'><BsFillArrowDownCircleFill className='text-brand-color '></BsFillArrowDownCircleFill>Sedasyon(Opsiyonel)</li>
                        <li className='flex items-center justify-center gap-x-2 hover:animate-bounce cursor-pointer'><BsFillArrowDownCircleFill className='text-brand-color '></BsFillArrowDownCircleFill>Hasta Bilgi Güvenliği</li>
                    </div>

                </ul>
                <button className='w-auto h-12 bg-brand-color px-4 rounded-lg hover:text-gray-800 transition-colors text-white'>Şimdi Randevu Alın</button>
            </div>
        </div>
    )
}
