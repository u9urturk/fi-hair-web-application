import React from 'react'

export default function Fihair() {
    const image = process.env.PUBLIC_URL + "/hakkinda.png"
    return (
        <div className='w-full h-auto mb-28 flex items-center justify-center' >
            <div className='container flex flex-col items-start gap-y-20 py-20 px-20 justify-center'>
                <div className='px-12 py-8 bg-gradient-to-l from-gray-100 to-brand-color rounded-sm rounded-tl-3xl rounded-br-3xl'>
                    <strong className='font-serif tracking-widest  text-gray-500'>Hakkımızda</strong>
                </div>
                <div className=' flex flex-col md:flex-row items-center justify-center gap-x-10'>
                    <div className='flex flex-col items-start justify-center gap-y-4 text-2xl'>
                        <h1>Hoş geldiniz ! </h1>
                        <p className='font-serif text-gray-500 text-sm'>

                            2002 Yılından İtibaren Saç Ekimi Konusunda Hizmet Veriyoruz
                            Saç ekimini ‘Sanat’ ile birleştirerek, sektöründe öncü bir Saç Ekim Kliniği olan Fi Hair, 20 yıllık saç ekim tecrübesiyle, etik değerler ışığında, saygı ve güven çerçevesinde en son teknolojiyi, uzman kadrosuyla birleştirerek kişiye özel saç tasarımının ötesinde yaşamlarınıza; özgüven, kalite, mutluluk ve SANAT katmayı amaçlamaktadır.

                            Fi Hair Kliniğinde ve anlaşmalı özel hastanelerde bulunan tüm ürün, alet ve cihazlar son teknolojinin ürünüdür ve kişiye özel kullanılırlar.

                            Hastalarımız bizim misafirimizdir. Bütün hastalarımızın kendilerini özel hissetmeleri için tek tek görüşür, dinler, onların isteklerini ve arzularını mutlaka göz önünde bulundururuz. En iyi sonuca ulaşmak için hastalarımızı sağlıklı şekilde bilgilendiririz.

                            Alanında uzman doktorlar, tecrübeli tıbbi ve idari personellerden oluşan ekibimizle tüm tedavi süreçlerinde yanınızda oluyor, sizin için otel rezervasyonları ve transfer süreçlerini ücretsiz olarak planlıyoruz.
                        </p>
                    </div>
                    <img className='w-[520px] rounded-3xl pt-5 md:pt-0 h-auto' src={image} alt="hakkinda" />
                </div>
            </div>
        </div>
    )
}
